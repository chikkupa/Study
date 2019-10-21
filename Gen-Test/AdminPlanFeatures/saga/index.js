import { call, put, select } from "redux-saga/effects";
import api from "../../../utils/Api";
import { adminPlanFeature } from "../../../utils/urls";
import {
  PLAN_FEATURE_LIST_FETCH_LOADING,
  PLAN_FEATURE_LIST_FETCH_LOADING_COMPLETE,
  PLAN_FEATURE_LIST_FETCH_SUCCESS,
  PLAN_FEATURE_LIST_FETCH_FAILED,
  PLAN_FEATURE_LIST_FETCH_NON_BLOCKING,
  ADD_PLAN_FEATURE_LOADING,
  ADD_PLAN_FEATURE_LOADING_COMPLETE,
  ADD_PLAN_FEATURE_SUCCESS,
  ADD_PLAN_FEATURE_FAILED,
  DELETE_PLAN_FEATURE_LOADING,
  DELETE_PLAN_FEATURE_LOADING_COMPLETE,
  DELETE_PLAN_FEATURE_SUCCESS,
  DELETE_PLAN_FEATURE_FAILED,
  EDIT_PLAN_FEATURE_LOADING,
  EDIT_PLAN_FEATURE_LOADING_COMPLETE,
  EDIT_PLAN_FEATURE_SUCCESS,
  EDIT_PLAN_FEATURE_FAILED,
} from "../dux";
import { getAccessToken } from "../../LoginContainer/dux";
import { showErrorToast, showSuccessToast } from "../../../utils/showToast";

export default function* adminPlanFeaturesSaga(action) {
  yield put({
    type: PLAN_FEATURE_LIST_FETCH_LOADING,
  });
  const token = yield select(state => getAccessToken(state));
  const params = action;
  let sortKey = "title";
  let sortOrder = "asc";
  let limit = 0;
  let page = 1;
  let search_key = "";
  if (params) {
    sortKey = params.sortKey || sortKey;
    sortOrder = params.sortOrder || sortOrder;
    limit = params.limit || limit;
    page = params.page || page;
    search_key = params.search_key || search_key;
  }
  try {
    const response = yield call(api, {
      url: `${adminPlanFeature}?sort_key=${sortKey}&sort_order=${sortOrder}&limit=${limit}&page=${page}&search_key=${search_key}`,
      token,
      method: "get",
    });

    if (response && response.data) {
      yield put({
        type: PLAN_FEATURE_LIST_FETCH_SUCCESS,
        response: { ...response.data, meta: response.meta },
      });
      yield put({
        type: PLAN_FEATURE_LIST_FETCH_LOADING_COMPLETE,
      });
    }
  } catch (error) {
    yield put({
      type: PLAN_FEATURE_LIST_FETCH_FAILED,
      error,
    });
  }
}

export function* addPlanFeatureSaga(action) {
  const { title, description } = action;
  const request = {
    title,
    description,
  };
  yield put({
    type: ADD_PLAN_FEATURE_LOADING,
  });
  const token = yield select(state => getAccessToken(state));
  try {
    const response = yield call(api, {
      url: `${adminPlanFeature}`,
      token,
      method: "post",
      params: request,
    });
    if (response && response.status === 200) {
      // yield put({
      //   type: ADD_PLAN_FEATURE_SUCCESS,
      //   response: { ...response.data },
      // });
      // yield put({
      //   type: ADD_PLAN_FEATURE_LOADING_COMPLETE,
      // });
      yield put({
        type: PLAN_FEATURE_LIST_FETCH_NON_BLOCKING,
      });
      showSuccessToast(response.message, 5000);
    } else {
      showErrorToast(response.message);
    }
  } catch (error) {
    showErrorToast(error.message, 5000);
    yield put({
      type: ADD_PLAN_FEATURE_FAILED,
      error,
    });
  }
}

export function* deletePlanFeatureSaga(action) {
  const { id } = action;
  const request = {
    id,
  };
  yield put({
    type: DELETE_PLAN_FEATURE_LOADING,
  });
  const token = yield select(state => getAccessToken(state));
  try {
    const response = yield call(api, {
      url: `${adminPlanFeature}`,
      token,
      method: "delete",
      params: request,
    });
    if (response && response.status === 200) {
      yield put({
        type: PLAN_FEATURE_LIST_FETCH_NON_BLOCKING,
      });
      showSuccessToast(response.message, 5000);
    } else {
      showErrorToast(response.message);
    }
  } catch (error) {
    showErrorToast(error.message, 5000);
    yield put({
      type: DELETE_PLAN_FEATURE_FAILED,
      error,
    });
  }
}

export function* editPlanFeatureSaga(action) {
  const { id, value, description, force_edit } = action;
  const request = {
    title: value,
    description,
    force_edit,
  };
  yield put({
    type: EDIT_PLAN_FEATURE_LOADING,
  });
  const token = yield select(state => getAccessToken(state));
  try {
    const response = yield call(api, {
      url: `${adminPlanFeature}/${id}`,
      token,
      method: "put",
      params: request,
    });
    if (response && response.status === 200) {
      yield put({
        type: EDIT_PLAN_FEATURE_SUCCESS,
      });
      if(response.data){
        yield put({
          type: PLAN_FEATURE_LIST_FETCH_NON_BLOCKING,
        });
        showSuccessToast(response.message, 5000);
      }
    } else {
      showErrorToast(response.message);
    }
  } catch (error) {
    showErrorToast(error.message, 5000);
    yield put({
      type: EDIT_PLAN_FEATURE_FAILED,
      error,
    });
  }
}