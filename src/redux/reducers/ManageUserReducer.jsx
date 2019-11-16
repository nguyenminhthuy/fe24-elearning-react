import * as types from '../constants/ManageUserConstant';

const initialState = {
    userList:[]
  }

  export const ManageUserReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.GET_USER_LIST: {
      state.userList = action.userList;
      return {...state}
    }
    default:
      return state
    }
  }
  