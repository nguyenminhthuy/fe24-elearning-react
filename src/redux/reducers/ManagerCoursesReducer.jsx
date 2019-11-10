import * as types from '../constants/ManageCoursesConstant';

const initialState = {
    courseCategory:[],
    courseList:[],
    courseByCat:[],
    courseDetailByID:{},
    courseListBySearch:[]
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
    case types.GET_COURSE_DETAIL: {
      state.courseDetailByID = action.courseDetailByID;
      return {...state}
    }
    case types.GET_COURSE_LIST_BY_SEARCH: {
      state.courseListBySearch = action.courseListBySearch;
      return {...state}
    }
    default:
      return state
    }
  }
  