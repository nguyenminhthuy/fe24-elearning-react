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


