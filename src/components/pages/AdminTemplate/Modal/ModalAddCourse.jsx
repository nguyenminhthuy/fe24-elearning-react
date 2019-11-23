import React from 'react';
import { connect } from 'react-redux';
import { Alert, Input } from 'antd';
import { addUserAction } from '../../../../redux/actions/ManageUserAction';
import { settings } from '../../../../config/setting'
const { TextArea } = Input;
const styles = {
    form: {
        textAlign: 'center'
    }
}

class ModalAddCourse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseInfo: {
                txtCourseID: '',
                txtCourseName: '',
                txtBiDanh: '',
                txtDesc: '',
                txtImg: '',
                maNhom: settings.groupID
            },
            errors: {
                txtCourseID: '',
                txtCourseName: '',
                txtBiDanh: '',
                txtDesc: '',
                txtImg: ''
            }
        }
    }

    handleOnChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            courseInfo: { ...this.state.courseInfo, [name]: value }
        }, () => {
            // console.log(this.state);
        })
    };

    validateInput = (e) => {
        let { name, value, type } = e.target;
        let errorMessage = '';
        if (value === '') {
            errorMessage = `Vui lòng điền đầy đủ thông tin.`;
        }
        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        }, () => {
            // console.log(this.state) 
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        // let userInfo = {
        //     taiKhoan: this.state.courseInfo.txtCourseID,
        //     matKhau: this.state.courseInfo.txtCourseName,
        //     hoTen: this.state.courseInfo.txtBiDanh,
        //     soDT: this.state.courseInfo.txtDesc,
        //     maNhom: settings.groupID,
        //     email: this.state.courseInfo.txtImg,
        //     maLoaiNguoiDung:'HV'
        // }
        // this.props.addUser(userInfo);
    };

    render() {
        return (

            <form style={styles.form} className="ml-3 mr-3" onSubmit={this.handleOnSubmit}>
                <div className='form-group row'>
                    <div className="col-6">
                        <p className="text-left">Mã khóa học</p>
                        <input name="txtCourseID"
                            onChange={this.handleOnChange}
                            value={this.state.courseInfo.txtCourseID}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text'
                            placeholder='Mã khóa học' />
                    </div>
                    <div className="col-6">
                        <p className="text-left">Tên khóa học</p>
                        <input name="txtCourseName"
                            onChange={this.handleOnChange}
                            value={this.state.courseInfo.txtCourseName}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text' placeholder='Tên khóa học' />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-6">
                        {this.state.errors.txtCourseID ?
                            <Alert message={this.state.errors.txtCourseID} type="error" /> : ''}
                    </div>
                    <div className="col-6">
                        {this.state.errors.txtCourseName ?
                            <Alert message={this.state.errors.txtCourseName} type="error" /> : ''}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-6">
                        <p className="text-left">Bí danh</p>
                        <input name="txtBiDanh"
                            onChange={this.handleOnChange}
                            value={this.state.courseInfo.txtBiDanh}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text'
                            placeholder='Bí danh' />
                    </div>
                    <div className="col-6">
                        <p className="text-left">Hình ảnh</p>
                        <input name="txtImg"
                            onChange={this.handleOnChange}
                            value={this.state.courseInfo.txtImg}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            className='input' type='text' placeholder='Hình ảnh' />
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-6">
                        {this.state.errors.txtBiDanh ?
                            <Alert message={this.state.errors.txtBiDanh} type="error" /> : ''}
                    </div>
                    <div className="col-6">
                        {this.state.errors.txtImg ?
                            <Alert message={this.state.errors.txtImg} type="error" /> : ''}
                    </div>
                </div>
                <div className='form-group row'>
                    <div className="col-12">
                        <p className="text-left">Mô tả</p>
                        <TextArea
                            value={this.state.courseInfo.txtDesc}
                            onChange={this.handleOnChange}
                            onBlur={this.validateInput}
                            onKeyUp={this.validateInput}
                            onKeyPress={this.validateInput}
                            placeholder="Mô tả"
                            rows={6}
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    {this.state.errors.txtDesc ?
                        <Alert message={this.state.errors.txtDesc} type="error" /> : ''}
                </div>
                <div className='form-group row'>
                    <button className='btn' type='submit'>Thêm khóa học</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userInfo) => {
            dispatch(addUserAction(userInfo));
        }
    }
}

export default connect(null, mapDispatchToProps)(ModalAddCourse);
