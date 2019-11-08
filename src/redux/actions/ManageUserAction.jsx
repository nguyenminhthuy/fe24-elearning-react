import axios from 'axios';
import * as types from '../constants/ManageUserConstant';
import { settings } from '../../config/setting'

export const loginAction = (accountInfo) => {
  return dispatch => {
    axios({
      url: settings.domain + `/QuanLyNguoiDung/DangNhap`,
      method: 'POST',
      data: {
        taiKhoan: accountInfo.txtUsername,
        matKhau: accountInfo.txtPassword
      }
    }).then(result => {
      console.log(result.data);
      //Đăng nhập thành công
      localStorage.setItem(settings.accountInfo, JSON.stringify(result.data));
      localStorage.setItem(settings.token, result.data.accessToken);
    }).catch(errors => {
      console.log(errors.response.data)
    })
  }
}


