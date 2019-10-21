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