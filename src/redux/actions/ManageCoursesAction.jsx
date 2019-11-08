import * as types from '../constants/ManageCoursesConstant';
import axios from 'axios';
import { settings } from '../../config/setting'

export const getCoursesCategoryAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: 'GET'
        }).then(result => {
            // console.log(result);
            dispatch({
                type: types.GET_COURSE_CATEGORIES,
                courseCategory: result.data
            })
        }).catch((errors) => {
            console.log(errors.response.data);
        })
    }
}
 
export const getCoursesListAction = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${settings.groupID}`,
            method: 'GET'
        }).then(result => {
            // console.log(result);
            dispatch({
                type: types.GET_COURSE_LIST,
                courseList: result.data
            })
        }).catch((errors) => {
            console.log(errors.response.data);
        })
    }
}

export const getCoursesByCatAction = (courseCat) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${courseCat}&MaNhom=${settings.groupID}`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: types.GET_COURSE_BY_CAT,
                courseByCat: result.data
            })            
        }).catch((errors) => {
            console.log(errors.response.data);
        })
    }
}

export const getCoursesDetailAction = (courseID) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseID}`,
            method: 'GET'
        }).then(result => {
            dispatch({
                type: types.GET_COURSE_DETAIL,
                courseDetailByID: result.data
            })            
        }).catch((errors) => {
            console.log(errors.response.data);
        })
    }
}

export const getCoursesListByKeySearchAction = (keySearch) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keySearch}&MaNhom=${settings.groupID}`,
            method: 'GET'
        }).then(result => {
            // console.log(result);
            dispatch({
                type: types.GET_COURSE_LIST_BY_SEARCH,
                courseListBySearch: result.data
            })
        }).catch((errors) => {
            console.log(errors.response.data);
        })
    }
}