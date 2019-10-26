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