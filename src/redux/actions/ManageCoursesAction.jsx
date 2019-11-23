import * as types from '../constants/ManageCoursesConstant';
import axios from 'axios';
import Swal from 'sweetalert2';
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

export const registerCoursebyUserAction = (TTDK) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyKhoaHoc/DangKyKhoaHoc`,
            method: 'POST',
            data: TTDK,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem(settings.token)
            }
        }).then(result => {
            // console.log(result);
            Swal.fire({
                icon: 'success',
                title: 'Thông báo!',
                text: result.response.data,
              }).then(result => {
                window.location.href = '/';
              });
        }).catch((errors) => {
            // console.log(errors.response.data);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errors.response.data,
              })
        })
    }
}

export const deleteCourseAction = (courseID) => {
    return () => {
      axios({
        url: settings.domain + `/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${courseID}`,
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(settings.token)
        }
      }).then(result => {
        Swal.fire({
          icon: 'success',
          title: 'Thông báo',
          text: 'Xóa khóa học thành công.',
        }).then(resultdata => {
          window.location.reload()
        });
      }).catch(errors => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errors.response.data,
        })
      })
    }
  }