import * as types from '../constants/ManageCoursesConstant';
import { number } from 'prop-types';

const initialState = {
    courseCategory:[],
    courseList:[],
    courseByCat:[]
  }

  export const ManagerCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_COURSE_CATEGORIES: {
      state.courseCategory = action.courseCategory;
      return {...state}
    }
    case types.GET_COURSE_LIST: {
      state.courseList = action.courseList;
      return {...state}
    }
    case types.GET_COURSE_BY_CAT: {
      state.courseByCat = action.courseByCat;
      return {...state}
    }
    default:
      return state
    }
  }
  