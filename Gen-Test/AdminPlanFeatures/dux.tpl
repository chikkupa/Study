// Inputs Required
// .ClassName:string
// .ShortName:string
// .List:boolean
// .Add:boolean
// .Delete:boolean
// .Update:boolean
// .Search:boolean

const initialState = {
  {{if or .List .Search}}planFeatureList: [],{{end}}
  isLoading: false,
  error: undefined,
  meta: {},
  isLoadingSave: false,
  {{if or .List .Search}}totalFeatures: 0,{{end}}
};

{{if .List}}export const {{.getConstantName .ClassName}}_LIST_FETCH_START =
  "@admin_plan_features/{{.getConstantName .ClassName}}_LIST_FETCH_START";
export const {{.getConstantName .ClassName}}_LIST_FETCH_LOADING =
  "@admin_plan_features/{{.getConstantName .ClassName}}_LIST_FETCH_LOADING";
export const {{.getConstantName .ClassName}}_LIST_FETCH_LOADING_COMPLETE =
  "@admin_plan_features/{{.getConstantName .ClassName}}_LIST_FETCH_LOADING_COMPLETE";
export const {{.getConstantName .ClassName}}_LIST_FETCH_SUCCESS =
  "@admin_plan_features/{{.getConstantName .ClassName}}_LIST_FETCH_SUCCESS";
export const {{.getConstantName .ClassName}}_LIST_FETCH_FAILED =
  "@admin_plan_features/{{.getConstantName .ClassName}}_LIST_FETCH_FAILED";
export const {{.getConstantName .ClassName}}_LIST_FETCH_NON_BLOCKING =
  "@admin_plan_features/{{.getConstantName .ClassName}}_LIST_FETCH_NON_BLOCKING";{{end}}

export const ADD_{{.getConstantName .ClassName}}_START =
  "@admin_plan_features/ADD_{{.getConstantName .ClassName}}_START";
export const ADD_{{.getConstantName .ClassName}}_LOADING =
  "@admin_plan_features/ADD_{{.getConstantName .ClassName}}_LOADING";
export const ADD_{{.getConstantName .ClassName}}_LOADING_COMPLETE =
  "@admin_plan_features/ADD_{{.getConstantName .ClassName}}_LOADING_COMPLETE";
export const ADD_{{.getConstantName .ClassName}}_SUCCESS =
  "@admin_plan_features/ADD_{{.getConstantName .ClassName}}_SUCCESS";
export const ADD_{{.getConstantName .ClassName}}_FAILED =
  "@admin_plan_features/ADD_{{.getConstantName .ClassName}}_FAILED";

export const DELETE_{{.getConstantName .ClassName}}_START =
  "@admin_plan_features/DELETE_{{.getConstantName .ClassName}}_START";
export const DELETE_{{.getConstantName .ClassName}}_LOADING =
  "@admin_plan_features/DELETE_{{.getConstantName .ClassName}}_LOADING";
export const DELETE_{{.getConstantName .ClassName}}_LOADING_COMPLETE =
  "@admin_plan_features/DELETE_{{.getConstantName .ClassName}}_LOADING_COMPLETE";
export const DELETE_{{.getConstantName .ClassName}}_SUCCESS =
  "@admin_plan_features/DELETE_{{.getConstantName .ClassName}}_SUCCESS";
export const DELETE_{{.getConstantName .ClassName}}_FAILED =
  "@admin_plan_features/DELETE_{{.getConstantName .ClassName}}_FAILED";

export const EDIT_{{.getConstantName .ClassName}}_START =
  "@admin_plan_features/EDIT_{{.getConstantName .ClassName}}_START";
export const EDIT_{{.getConstantName .ClassName}}_LOADING =
  "@admin_plan_features/EDIT_{{.getConstantName .ClassName}}_LOADING";
export const EDIT_{{.getConstantName .ClassName}}_LOADING_COMPLETE =
  "@admin_plan_features/EDIT_{{.getConstantName .ClassName}}_LOADING_COMPLETE";
export const EDIT_{{.getConstantName .ClassName}}_SUCCESS =
  "@admin_plan_features/EDIT_{{.getConstantName .ClassName}}_SUCCESS";
export const EDIT_{{.getConstantName .ClassName}}_FAILED =
  "@admin_plan_features/EDIT_{{.getConstantName .ClassName}}_FAILED";

export function fetchPlanFeatures(params) {
  return {
    type: {{.getConstantName .ClassName}}_LIST_FETCH_START,
    ...params,
  };
}

export function addPlanFeature(params) {
  return {
    type: ADD_{{.getConstantName .ClassName}}_START,
    ...params,
  };
}

export function deletePlanFeature(params) {
  return {
    type: DELETE_{{.getConstantName .ClassName}}_START,
    ...params,
  };
}

export function editPlanFeature(params) {
  return {
    type: EDIT_{{.getConstantName .ClassName}}_START,
    ...params,
  };
}

export const adminPlanFeaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case {{.getConstantName .ClassName}}_LIST_FETCH_LOADING:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      };
    case {{.getConstantName .ClassName}}_LIST_FETCH_LOADING_COMPLETE:
      return {
        ...state,
        isLoading: false,
        isLoadingSave: false,
      };
    case {{.getConstantName .ClassName}}_LIST_FETCH_SUCCESS:
      const { response } = action;
      return {
        ...state,
        planFeatureList: response.features,
        totalFeatures: response.meta.total_count,
        meta: response.meta,
      };
    case {{.getConstantName .ClassName}}_LIST_FETCH_FAILED:
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        isLoadingSave: false,
        error,
      };
    case ADD_{{.getConstantName .ClassName}}_LOADING:
      return {
        ...state,
        error: undefined,
        isLoadingSave: true,
      };
    case ADD_{{.getConstantName .ClassName}}_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingSave: false,
      };
    case ADD_{{.getConstantName .ClassName}}_SUCCESS:
      return {
        ...state,
      };
    case ADD_{{.getConstantName .ClassName}}_FAILED:
      const errorAdd = action;
      return {
        ...state,
        error: errorAdd,
        isLoadingSave: false,
      };
    case DELETE_{{.getConstantName .ClassName}}_LOADING:
      return {
        ...state,
        error: undefined,
        isLoadingSave: true,
      };
    case DELETE_{{.getConstantName .ClassName}}_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingSave: false,
      };
    case DELETE_{{.getConstantName .ClassName}}_SUCCESS:
      return {
        ...state,
      };
    case DELETE_{{.getConstantName .ClassName}}_FAILED:
      //  errorAdd = action;
      return {
        ...state,
        // error: errorAdd,
        isLoadingSave: false,
      };

    case EDIT_{{.getConstantName .ClassName}}_LOADING:
      return {
        ...state,
        error: undefined,
        isLoadingSave: true,
      };
    case EDIT_{{.getConstantName .ClassName}}_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingSave: false,
      };
    case EDIT_{{.getConstantName .ClassName}}_SUCCESS:
      return {
        ...state,
      };
    case EDIT_{{.getConstantName .ClassName}}_FAILED:
      const errorEdit = action.error;
      return {
        ...state,
        error: errorEdit,
        isLoadingSave: false,
      };
    default:
      return state;
  }
};

export function getPlanFeatureList(state) {
  return state.adminPlanFeaturesReducer.planFeatureList;
}

export function getTotalPlanFeatures(state) {
  return state.adminPlanFeaturesReducer.totalFeatures;
}

export function getIsLoadingList(state) {
  return state.adminPlanFeaturesReducer.isLoading;
}

export function getError(state) {
  return state.adminPlanFeaturesReducer.error;
}