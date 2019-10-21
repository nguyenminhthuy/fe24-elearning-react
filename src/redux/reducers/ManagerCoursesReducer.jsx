import * as types from '../constants/ManageCoursesConstant';

const initialState = {
    courseCategory:[]
  }

  export const ManagerCoursesReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_COURSE_CATEGORIES: {
      state.courseCategory = action.courseCategory;
      return {...state}
    }
    default:
      return state
    }
  }
  