import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusAction';

export function loadCourseSuccess(course) {
  return { type: types.LOAD_COURSES_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
    .then(function(courses) {
      dispatch(loadCourseSuccess(courses));
    })
    .catch(function(error) {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
      .then(function(savedCourse) {
        return course.id ?
          dispatch(updateCourseSuccess(savedCourse)) :
          dispatch(createCourseSuccess(savedCourse))
      })
      .catch(function(error) {
        throw(error);
      })
  }
}
