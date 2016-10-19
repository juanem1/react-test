import * as types from '../actions/actionTypes';
import initialState from './initialState';

function acctionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallInProgress, action) {
  if (action.type = types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (acctionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
