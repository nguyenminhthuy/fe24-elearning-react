import * as types from '../constants/ManageUserConstant';
import axios from 'axios';
import Swal from 'sweetalert2';
import { settings } from '../../config/setting'

export const loginAction = (userLogin) => {
  return () => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/DangNhap`,
      method: 'POST',
      data: {
        taiKhoan: userLogin.txtUsername,
        matKhau: userLogin.txtPassword
      }
    }).then(result => {
      // console.log(result.data);
      localStorage.setItem(settings.userLogin, JSON.stringify(result.data));
      localStorage.setItem(settings.token, result.data.accessToken);
      window.location.href = '/';
    }).catch(errors => {
      // console.log(errors.response.data)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errors.response.data,
      }).then(resultdata => {
        window.location.reload()
      });
    })
  }
}

export const signUpAction = (userSignUp) => {
  return () => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/DangKy`,
      method: 'POST',
      data: userSignUp
    }).then(result => {
      // console.log(result.data);   
      window.location.href = '/login';
    }).catch(errors => {
      // console.log(errors.response.data)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errors.response.data,
      }).then(resultdata => {
        window.location.reload()
      });
    })
  }
}

export const updateProfileAction = (userUpdate) => {
  return () => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: 'PUT',
      data: userUpdate,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(settings.token)
      }
    }).then(result => {
      // console.log(result.data);   
      Swal.fire({
        icon: 'success',
        title: 'Thông báo',
        text: 'Cập nhật thông tin tài khoản thành công.',
      }).then(resultdata => {
        window.location.reload()
      });
    }).catch(errors => {
      // console.log(errors.response.data)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errors.response.data,
      }).then(resultdata => {
        window.location.reload()
      });
    })
  }
}

export const addUserAction = (userObject) => {
  return () => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/ThemNguoiDung`,
      method: 'POST',
      data: userObject,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem(settings.token)
      }
    }).then(result => {
      console.log(result.data);
    }).catch(errors => {
      console.log(errors.response.data)
    })
  }
}

export const getUserListAction = () => {
  return dispatch => {
      axios({
          url: settings.domain + `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`,
          method: 'GET'
      }).then(result => {
          console.log(result);
          dispatch({
              type: types.GET_USER_LIST,
              userList: result.data
          })
      }).catch((errors) => {
          console.log(errors.response.data);
      })
  }
}


