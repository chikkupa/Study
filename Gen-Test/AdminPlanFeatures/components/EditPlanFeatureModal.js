import React, {Component, Fragment} from "react";
import {
  Button,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from "reactstrap";

class EditPlanFeatureModal extends Component {
  renderFooter = props => {
    const {onSubmit} = props;

    return (
      <ModalFooter>
        <Button
          onClick={() => onSubmit()}
          color="primary"
          className="app-c-btn app-c-btn--light"
        >
          Save
        </Button>
      </ModalFooter>
    );
  };

  render() {
    const {
      toggle,
      isOpen,
      className,
      title,
      value,
      description,
      onChange,
      onSubmit,
      message,
    } = this.props;

    return (
      <Modal isOpen={isOpen}>
        <ModalHeader className="" toggle={toggle}>
          {title}
        </ModalHeader>
        <ModalBody className="edit_type_modal_block">
          <FormGroup className=" mb-0">
            <div className={"form-group"}>
              <Label>Plan</Label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Plan Name"
                name="editValue"
                onChange={e => onChange(e)}
                value={value}
              />
            </div>
            <div className={"form-group"}>
              <Label>Description</Label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                name="editDescription"
                onChange={e => onChange(e)}
                value={description}
              />
            </div>
          </FormGroup>
        </ModalBody>
        {this.renderFooter(this.props)}
      </Modal>
    );
  }
}

export default EditPlanFeatureModal;
