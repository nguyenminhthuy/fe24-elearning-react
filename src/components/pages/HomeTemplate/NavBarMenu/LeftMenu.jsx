import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

//connect redux
import { connect } from 'react-redux';
import { getCoursesCategoryAction } from '../../../../redux/actions/ManageCoursesAction';

const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {  
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCoursesCategory();
  }

  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <NavLink exact to='/' className="nav-link" href="#">Trang chủ</NavLink>
          </Menu.Item>
          <SubMenu title={<span>Danh mục khóa học</span>}>
            {this.props.courseCategory.map((courseCat, index) => {
              return (
                <Menu.Item key={index}>
                    <a href={'/course-list/' + courseCat.maDanhMuc} className="nav-link pb-0">{courseCat.tenDanhMuc}</a>
                </Menu.Item>
              )
            })}
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="">Liên hệ</a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseCategory: state.ManagerCoursesReducer.courseCategory
  }
}
const mapDispatchToProp = (dispatch) => {
  return {
    getCoursesCategory: () => {
      dispatch(getCoursesCategoryAction());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProp)(LeftMenu)
