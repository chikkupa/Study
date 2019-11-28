// Inputs Required
// .Input.ClassName:string
// .ShortName:string
// .Input.List:boolean
// .Input.Add:boolean
// .Input.Delete:boolean
// .Input.Update:boolean
// .Input.Search:boolean

const initialState = {
  {{if or .Input.List .Input.Search}}planFeatureList: [],{{end}}
  isLoading: false,
  error: undefined,
  meta: {},
  isLoadingSave: false,
  {{if or .Input.List .Input.Search}}totalFeatures: 0,{{end}}
};

{{if .Input.List}}
export const {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_START =
  "@{{call .GetLowerConstantName .Input.ClassName}}/{{call .GetConstantName .Input.ClassName}}_LIST_FETCH_START";
export const {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_LOADING =
  "@{{call .GetLowerConstantName .Input.ClassName}}/{{call .GetConstantName .Input.ClassName}}_LIST_FETCH_LOADING";
export const {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_LOADING_COMPLETE =
  "@{{call .GetLowerConstantName .Input.ClassName}}/{{call .GetConstantName .Input.ClassName}}_LIST_FETCH_LOADING_COMPLETE";
export const {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_SUCCESS =
  "@{{call .GetLowerConstantName .Input.ClassName}}/{{call .GetConstantName .Input.ClassName}}_LIST_FETCH_SUCCESS";
export const {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_FAILED =
  "@{{call .GetLowerConstantName .Input.ClassName}}/{{call .GetConstantName .Input.ClassName}}_LIST_FETCH_FAILED";
export const {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_NON_BLOCKING =
  "@{{call .GetLowerConstantName .Input.ClassName}}/{{call .GetConstantName .Input.ClassName}}_LIST_FETCH_NON_BLOCKING";
{{end}}
{{if .Input.Add}}
export const ADD_{{call .GetConstantName .Input.ClassName}}_START =
  "@{{call .GetLowerConstantName .Input.ClassName}}/ADD_{{call .GetConstantName .Input.ClassName}}_START";
export const ADD_{{call .GetConstantName .Input.ClassName}}_LOADING =
  "@{{call .GetLowerConstantName .Input.ClassName}}/ADD_{{call .GetConstantName .Input.ClassName}}_LOADING";
export const ADD_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE =
  "@{{call .GetLowerConstantName .Input.ClassName}}/ADD_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE";
export const ADD_{{call .GetConstantName .Input.ClassName}}_SUCCESS =
  "@{{call .GetLowerConstantName .Input.ClassName}}/ADD_{{call .GetConstantName .Input.ClassName}}_SUCCESS";
export const ADD_{{call .GetConstantName .Input.ClassName}}_FAILED =
  "@{{call .GetLowerConstantName .Input.ClassName}}/ADD_{{call .GetConstantName .Input.ClassName}}_FAILED";
{{end}}
{{if .Input.Delete}}
export const DELETE_{{call .GetConstantName .Input.ClassName}}_START =
  "@{{call .GetLowerConstantName .Input.ClassName}}/DELETE_{{call .GetConstantName .Input.ClassName}}_START";
export const DELETE_{{call .GetConstantName .Input.ClassName}}_LOADING =
  "@{{call .GetLowerConstantName .Input.ClassName}}/DELETE_{{call .GetConstantName .Input.ClassName}}_LOADING";
export const DELETE_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE =
  "@{{call .GetLowerConstantName .Input.ClassName}}/DELETE_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE";
export const DELETE_{{call .GetConstantName .Input.ClassName}}_SUCCESS =
  "@{{call .GetLowerConstantName .Input.ClassName}}/DELETE_{{call .GetConstantName .Input.ClassName}}_SUCCESS";
export const DELETE_{{call .GetConstantName .Input.ClassName}}_FAILED =
  "@{{call .GetLowerConstantName .Input.ClassName}}/DELETE_{{call .GetConstantName .Input.ClassName}}_FAILED";
{{end}}
{{if .Input.Update}}
export const EDIT_{{call .GetConstantName .Input.ClassName}}_START =
  "@{{call .GetLowerConstantName .Input.ClassName}}/EDIT_{{call .GetConstantName .Input.ClassName}}_START";
export const EDIT_{{call .GetConstantName .Input.ClassName}}_LOADING =
  "@{{call .GetLowerConstantName .Input.ClassName}}/EDIT_{{call .GetConstantName .Input.ClassName}}_LOADING";
export const EDIT_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE =
  "@{{call .GetLowerConstantName .Input.ClassName}}/EDIT_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE";
export const EDIT_{{call .GetConstantName .Input.ClassName}}_SUCCESS =
  "@{{call .GetLowerConstantName .Input.ClassName}}/EDIT_{{call .GetConstantName .Input.ClassName}}_SUCCESS";
export const EDIT_{{call .GetConstantName .Input.ClassName}}_FAILED =
  "@{{call .GetLowerConstantName .Input.ClassName}}/EDIT_{{call .GetConstantName .Input.ClassName}}_FAILED";
{{end}}
{{if .Input.List}}
export function fetch{{.Input.ClassName}}(params) {
  return {
    type: {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_START,
    ...params,
  };
}
{{end}}
{{if .Input.Add}}
export function add{{.Input.ClassName}}(params) {
  return {
    type: ADD_{{call .GetConstantName .Input.ClassName}}_START,
    ...params,
  };
}
{{end}}
{{if .Input.Delete}}
export function delete{{.Input.ClassName}}(params) {
  return {
    type: DELETE_{{call .GetConstantName .Input.ClassName}}_START,
    ...params,
  };
}
{{end}}
{{if .Input.Update}}
export function edit{{.Input.ClassName}}(params) {
  return {
    type: EDIT_{{call .GetConstantName .Input.ClassName}}_START,
    ...params,
  };
}
{{end}}

export const {{.Input.ClassName}}Reducer = (state = initialState, action) => {
  switch (action.type) {
    case {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_LOADING:
      return {
        ...state,
        error: undefined,
        isLoading: true,
      };
    case {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_LOADING_COMPLETE:
      return {
        ...state,
        isLoading: false,
        isLoadingSave: false,
      };
    case {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_SUCCESS:
      const { response } = action;
      return {
        ...state,
        planFeatureList: response.features,
        totalFeatures: response.meta.total_count,
        meta: response.meta,
      };
    case {{call .GetConstantName .Input.ClassName}}_LIST_FETCH_FAILED:
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        isLoadingSave: false,
        error,
      };
    case ADD_{{call .GetConstantName .Input.ClassName}}_LOADING:
      return {
        ...state,
        error: undefined,
        isLoadingSave: true,
      };
    case ADD_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingSave: false,
      };
    case ADD_{{call .GetConstantName .Input.ClassName}}_SUCCESS:
      return {
        ...state,
      };
    case ADD_{{call .GetConstantName .Input.ClassName}}_FAILED:
      const errorAdd = action;
      return {
        ...state,
        error: errorAdd,
        isLoadingSave: false,
      };
    case DELETE_{{call .GetConstantName .Input.ClassName}}_LOADING:
      return {
        ...state,
        error: undefined,
        isLoadingSave: true,
      };
    case DELETE_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingSave: false,
      };
    case DELETE_{{call .GetConstantName .Input.ClassName}}_SUCCESS:
      return {
        ...state,
      };
    case DELETE_{{call .GetConstantName .Input.ClassName}}_FAILED:
      //  errorAdd = action;
      return {
        ...state,
        // error: errorAdd,
        isLoadingSave: false,
      };

    case EDIT_{{call .GetConstantName .Input.ClassName}}_LOADING:
      return {
        ...state,
        error: undefined,
        isLoadingSave: true,
      };
    case EDIT_{{call .GetConstantName .Input.ClassName}}_LOADING_COMPLETE:
      return {
        ...state,
        isLoadingSave: false,
      };
    case EDIT_{{call .GetConstantName .Input.ClassName}}_SUCCESS:
      return {
        ...state,
      };
    case EDIT_{{call .GetConstantName .Input.ClassName}}_FAILED:
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

export function get{{.Input.ClassName}}List(state) {
  return state.admin{{.Input.ClassName}}Reducer.planFeatureList;
}

export function getTotal{{.Input.ClassName}}(state) {
  return state.admin{{.Input.ClassName}}Reducer.totalFeatures;
}

export function getIsLoadingList(state) {
  return state.admin{{.Input.ClassName}}Reducer.isLoading;
}

export function getError(state) {
  return state.admin{{.Input.ClassName}}Reducer.error;
}
