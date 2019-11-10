import axios from 'axios';
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
    }).catch(errors => {
      // console.log(errors.response.data)
      alert(errors.response.data)
    })
  }
}

export const signUpAction = (userSignUp) => {
  return () => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/ThemNguoiDung`,
      method: 'POST',
      data: userSignUp,
      headers:{
        Authorization:'Bearer ' + localStorage.getItem(settings.token)
      }
    }).then(result => {
      console.log(result.data);      
    }).catch(errors => {
      console.log(errors.response.data)
    })
  }
}


