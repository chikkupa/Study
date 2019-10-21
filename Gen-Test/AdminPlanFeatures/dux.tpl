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

{{if .List}}
export const {{.getConstantName .ClassName}}_LIST_FETCH_START =
  "@{{.getLowerConstantName .ClassName}}/{{.getConstantName .ClassName}}_LIST_FETCH_START";
export const {{.getConstantName .ClassName}}_LIST_FETCH_LOADING =
  "@{{.getLowerConstantName .ClassName}}/{{.getConstantName .ClassName}}_LIST_FETCH_LOADING";
export const {{.getConstantName .ClassName}}_LIST_FETCH_LOADING_COMPLETE =
  "@{{.getLowerConstantName .ClassName}}/{{.getConstantName .ClassName}}_LIST_FETCH_LOADING_COMPLETE";
export const {{.getConstantName .ClassName}}_LIST_FETCH_SUCCESS =
  "@{{.getLowerConstantName .ClassName}}/{{.getConstantName .ClassName}}_LIST_FETCH_SUCCESS";
export const {{.getConstantName .ClassName}}_LIST_FETCH_FAILED =
  "@{{.getLowerConstantName .ClassName}}/{{.getConstantName .ClassName}}_LIST_FETCH_FAILED";
export const {{.getConstantName .ClassName}}_LIST_FETCH_NON_BLOCKING =
  "@{{.getLowerConstantName .ClassName}}/{{.getConstantName .ClassName}}_LIST_FETCH_NON_BLOCKING";
{{end}}
{{if .ADD}}
export const ADD_{{.getConstantName .ClassName}}_START =
  "@{{.getLowerConstantName .ClassName}}/ADD_{{.getConstantName .ClassName}}_START";
export const ADD_{{.getConstantName .ClassName}}_LOADING =
  "@{{.getLowerConstantName .ClassName}}/ADD_{{.getConstantName .ClassName}}_LOADING";
export const ADD_{{.getConstantName .ClassName}}_LOADING_COMPLETE =
  "@{{.getLowerConstantName .ClassName}}/ADD_{{.getConstantName .ClassName}}_LOADING_COMPLETE";
export const ADD_{{.getConstantName .ClassName}}_SUCCESS =
  "@{{.getLowerConstantName .ClassName}}/ADD_{{.getConstantName .ClassName}}_SUCCESS";
export const ADD_{{.getConstantName .ClassName}}_FAILED =
  "@{{.getLowerConstantName .ClassName}}/ADD_{{.getConstantName .ClassName}}_FAILED";
{{end}}
{{if .Delete}}
export const DELETE_{{.getConstantName .ClassName}}_START =
  "@{{.getLowerConstantName .ClassName}}/DELETE_{{.getConstantName .ClassName}}_START";
export const DELETE_{{.getConstantName .ClassName}}_LOADING =
  "@{{.getLowerConstantName .ClassName}}/DELETE_{{.getConstantName .ClassName}}_LOADING";
export const DELETE_{{.getConstantName .ClassName}}_LOADING_COMPLETE =
  "@{{.getLowerConstantName .ClassName}}/DELETE_{{.getConstantName .ClassName}}_LOADING_COMPLETE";
export const DELETE_{{.getConstantName .ClassName}}_SUCCESS =
  "@{{.getLowerConstantName .ClassName}}/DELETE_{{.getConstantName .ClassName}}_SUCCESS";
export const DELETE_{{.getConstantName .ClassName}}_FAILED =
  "@{{.getLowerConstantName .ClassName}}/DELETE_{{.getConstantName .ClassName}}_FAILED";
{{end}}
{{if .Update}}
export const EDIT_{{.getConstantName .ClassName}}_START =
  "@{{.getLowerConstantName .ClassName}}/EDIT_{{.getConstantName .ClassName}}_START";
export const EDIT_{{.getConstantName .ClassName}}_LOADING =
  "@{{.getLowerConstantName .ClassName}}/EDIT_{{.getConstantName .ClassName}}_LOADING";
export const EDIT_{{.getConstantName .ClassName}}_LOADING_COMPLETE =
  "@{{.getLowerConstantName .ClassName}}/EDIT_{{.getConstantName .ClassName}}_LOADING_COMPLETE";
export const EDIT_{{.getConstantName .ClassName}}_SUCCESS =
  "@{{.getLowerConstantName .ClassName}}/EDIT_{{.getConstantName .ClassName}}_SUCCESS";
export const EDIT_{{.getConstantName .ClassName}}_FAILED =
  "@{{.getLowerConstantName .ClassName}}/EDIT_{{.getConstantName .ClassName}}_FAILED";
{{end}}
{{if .List}}
export function fetch{{.ClassName}}(params) {
  return {
    type: {{.getConstantName .ClassName}}_LIST_FETCH_START,
    ...params,
  };
}
{{end}}
{{if .Add}}
export function add{{.ClassName}}(params) {
  return {
    type: ADD_{{.getConstantName .ClassName}}_START,
    ...params,
  };
}
{{end}}
{{if .Delete}}
export function delete{{.ClassName}}(params) {
  return {
    type: DELETE_{{.getConstantName .ClassName}}_START,
    ...params,
  };
}
{{end}}
{{if .Update}}
export function edit{{.ClassName}}(params) {
  return {
    type: EDIT_{{.getConstantName .ClassName}}_START,
    ...params,
  };
}
{{end}}

export const admin{{.ClassName}}sReducer = (state = initialState, action) => {
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

export function get{{.ClassName}}List(state) {
  return state.admin{{.ClassName}}Reducer.planFeatureList;
}

export function getTotal{{.ClassName}}(state) {
  return state.admin{{.ClassName}}Reducer.totalFeatures;
}

export function getIsLoadingList(state) {
  return state.admin{{.ClassName}}Reducer.isLoading;
}

export function getError(state) {
  return state.admin{{.ClassName}}Reducer.error;
}