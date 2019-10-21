import React, {Component, Fragment} from "react";
import {Button, Col} from "reactstrap";
import imageURL from "../../../Assets/img";
import Loader from "../../components/DataLoader";
import {showErrorToast} from "../../utils/showToast";
import NoDataContainer from "../../components/NoDataContainer";
import {confirmAlert} from "react-confirm-alert";
import EditPlanFeatureModal from "./components/EditPlanFeatureModal";
import SearchInput from "../../components/SearchInput";

const operations = {
  ADD: 1,
  EDIT: 2,
  DELETE: 3,
  LIST: 4,
  SEARCH: 5,
};

export default class AdminPlanFeatures extends Component {
  state = {
    newFeature: "",
    description: "",
    error: undefined,
    openEditModal: false,
    editValue: "",
    editDescription: "",
    editId: 0,
    searchKey: "",
    lastOperation: undefined,
  };

  componentDidMount() {
    this.setState(
      {
        lastOperation: operations.LIST,
      },
      () => this.props.fetchPlanFeatures()
    );
  }

  componentDidUpdate(prevProps) {
    const {planFeatures, error} = this.props;

    if (
      JSON.stringify(planFeatures) !== JSON.stringify(prevProps.planFeatures)
    ) {
      this.setState({
        openEditModal: false,
        newFeature: "",
        description: "",
      });
    } else if (
      this.state.lastOperation === operations.EDIT &&
      error != undefined &&
      JSON.stringify(error) !== JSON.stringify(prevProps.error)
    ) {
      this.setState({
        openEditModal: true,
      });
    }
  }

  // componentWillReceiveProps = (prevProps) => {
  //   console.log("Component will receive props");
  //   const {error} = this.props;
  //   if(error !== undefined && JSON.stringify(error) !== JSON.stringify(prevProps.error)){
  //     this.setState({
  //       openEditModal: true,
  //     });
  //   }
  // }

  isFormValid = () => {
    let error = undefined;
    const {newFeature} = this.state;
    if (!newFeature) {
      if (!error) error = {};
      error.newFeature = "Enter a valid feature name";
    }
    return error;
  };

  handleSave = () => {
    const {newFeature, description} = this.state;
    const error = this.isFormValid();
    if (!error) {
      this.setState(
        {
          lastOperation: operations.ADD,
        },
        () =>
          this.props.addPlanFeature({
            title: newFeature,
            description,
          })
      );
    } else {
      showErrorToast(error.newFeature);
      this.setState({
        error,
      });
    }
  };

  handleSearch = e => {
    const searchKey = e.target.value;

    this.setState({
      searchKey: searchKey,
    });

    const params = {
      search_key: searchKey,
    };

    this.setState(
      {
        lastOperation: operations.SEARCH,
      },
      () => this.props.fetchPlanFeatures(params)
    );
  };

  handleChange = e => {
    const {value, name} = e.target;
    const {error} = this.state;
    if (error && error[name]) error[name] = "";

    this.setState({
      [name]: value,
    });
  };

  showAlert = item => {
    confirmAlert({
      title: "MapHabit",
      message: "Are you sure you want to delete this plan feature?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const params = {
              id: item.item.id,
            };

            this.setState(
              {
                lastOperation: operations.DELETE,
              },
              () => this.props.deletePlanFeature(params)
            );
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  handleToggleEdit = () => {
    this.setState({
      openEditModal: !this.state.openEditModal,
    });
  };

  handleEdit = item => {
    const {id, title, description} = item.item;

    this.handleToggleEdit();
    this.setState({
      editValue: title,
      editDescription: description,
      editId: id,
    });
  };

  handleEditSubmit = () => {
    if (this.state.editValue === "") {
      showErrorToast("Feature is required!", 5000);
      return;
    }

    const params = {
      id: this.state.editId,
      value: this.state.editValue,
      description: this.state.editDescription,
    };

    this.setState(
      {
        lastOperation: operations.EDIT,
      },
      () => this.props.editPlanFeature(params)
    );

    this.handleToggleEdit();
  };

  handleClearSearch = () => {
    this.setState(
      {
        searchKey: "",
      },
      () => {
        this.props.fetchPlanFeatures({
          search_key: "",
        });
      }
    );
  };

  renderSearch = () => {
    const {searchKey} = this.state;
    return (
      <div className="app-c-table__search__right">
        <form>
          <SearchInput
            placeholder="Search by Feature"
            onChange={this.handleSearch}
            value={searchKey}
            onClear={this.handleClearSearch}
          />
        </form>
      </div>
    );
  };

  renderAddNewItem = () => {
    const {newFeature, description, error} = this.state;
    return (
      <div className="app-c-table__add-row-section__wrap configure_filter--block access_codes-fields">
        <Col lg="5">
        <div className="app-c-table__add-row-section">
          <div
            className={`form-group ${
              error && error.newFeature ? "has-error" : null
            }`}
          >
            <label>FEATURE</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Feature"
              onChange={this.handleChange}
              name="newFeature"
              value={newFeature}
            />
          </div>
        </div>
        </Col>
        <Col lg="5">
        <div className="app-c-table__add-row-section ">
          <div
            className={`form-group ${
              error && error.description ? "has-error" : null
            }`}
          >
            <label>DESCRIPTION</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Description"
              onChange={this.handleChange}
              name="description"
              value={description}
            />
          </div>
        </div>
        </Col>
        <Col lg="2">
        <div className="app-c-table__add-row-section__btn-block">
          <Button
            onClick={() => this.handleSave()}
            color="primary"
            className="app-c-btn app-c-btn--light"
          >
            Save
          </Button>
        </div>
        </Col>
      </div>
    );
  };
  renderErrorBlock = errMsg => <div className="help-block">{errMsg}</div>;

  render() {
    const {isLoading, planFeatures, totalItems} = this.props;
    return (
      <Col lg="12">
        {this.renderAddNewItem()}
        <div className="app-c-settings-table-wrap">
          <div className="app-c-home-table-left">
            <div className="app-c-table">
              <div className="app-c-table__search">
                <div className="app-c-table__search__left">
                  <span>Total - {totalItems} Features</span>
                </div>
                {this.renderSearch()}
              </div>
              <table className="table">
                <table className="table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Description</th>
                    <th className="app-c-table__action-column">Action </th>
                  </tr>
                </thead>
                </table>
                <tbody>
                  <tr className="app-c-table__multilevel">
                    <td colSpan="3" />
                  </tr>

                  <tr className="app-c-table__spacing-row">
                    <td>
                      <hr />
                    </td>
                  </tr>
                  {isLoading ? (
                    <Loader />
                  ) : planFeatures && planFeatures.length > 0 ? (
                    planFeatures.map(item => (
                      <Fragment>
                        <tr className="app-c-table__multilevel">
                          <td colSpan="3">
                            <div className="app-c-table__multilevel__inner">
                              <table>
                                <tr>
                                  <td>{item.title}</td>
                                  <td>{item.description}</td>
                                  <td className="app-c-table__action-column">
                                    <Button className="app-c-btn app-c-btn--icon">
                                      <img
                                        src={imageURL.editPencil}
                                        className="img-responsive"
                                        alt="editPencil"
                                        onClick={() => this.handleEdit({item})}
                                      />
                                    </Button>
                                    <Button className="app-c-btn app-c-btn--icon">
                                      <img
                                        src={imageURL.trash}
                                        className="img-responsive"
                                        alt="trash"
                                        onClick={() => this.showAlert({item})}
                                      />
                                    </Button>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr className="app-c-table__spacing-row">
                          <td>
                            <hr />
                          </td>
                        </tr>
                      </Fragment>
                    ))
                  ) : (
                    <NoDataContainer />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <EditPlanFeatureModal
            toggle={this.handleToggleEdit}
            isOpen={this.state.openEditModal}
            className={this.props.className}
            title={"Edit Feature"}
            name="editValue"
            onChange={this.handleChange}
            value={this.state.editValue}
            description={this.state.editDescription}
            onSubmit={this.handleEditSubmit}
            showWarning={false}
            message={
              "Feature name is already in use. Are you sure want to edit this feature?"
            }
          />
        </div>
      </Col>
    );
  }
}
