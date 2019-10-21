import { connect } from "react-redux";
import { withRouter } from "react-router";
import AdminPlanFeatures from "./AdminPlanFeatures";

import {
  fetchPlanFeatures,
  getIsLoadingList,
  getPlanFeatureList,
  getTotalPlanFeatures,
  addPlanFeature,
  deletePlanFeature,
  editPlanFeature,
  getError,
} from "./dux";

const mapStateToProps = state => ({
  isLoading: getIsLoadingList(state),
  totalItems: getTotalPlanFeatures(state),
  planFeatures: getPlanFeatureList(state),
  error: getError(state),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchPlanFeatures: params => dispatch(fetchPlanFeatures(params)),
    addPlanFeature: params => dispatch(addPlanFeature(params)),
    deletePlanFeature: params => dispatch(deletePlanFeature(params)),
    editPlanFeature: params => dispatch(editPlanFeature(params)),
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminPlanFeatures)
);
