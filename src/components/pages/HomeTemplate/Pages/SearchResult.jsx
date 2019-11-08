import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb, Card } from 'antd';

//connect redux
import { connect } from 'react-redux';
import { getCoursesListByKeySearchAction } from '../../../../redux/actions/ManageCoursesAction';


class SearchResult extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { keySearch } = this.props.match.params;
        this.props.getCoursesListByKeySearch(keySearch);
    }

    renderSearchResult() {
        return this.props.courseListBySearch.map((courseLst, index) => {
            return (
                <div className="col-3 mb-5" key={index}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img style={{ width: 300, height: 230 }}
                                alt={courseLst.tenKhoaHoc}
                                src={courseLst.hinhAnh}
                            />
                        }
                        actions={[
                            <span>{courseLst.luotXem} lượt xem</span>,
                            <Link exact to={'/course-detail/' + courseLst.maKhoaHoc}>Xem chi tiết</Link>
                        ]}
                    >
                        <div className="desc">
                            <h6>
                                <Link exact to={'/course-detail/' + courseLst.maKhoaHoc}>{courseLst.tenKhoaHoc}</Link>
                            </h6>
                            <span>{courseLst.moTa}</span>
                        </div>
                    </Card>
                </div>
            )
        })
    }

    render() {        
        return (
            <div className="course-list">
                <div className="container mb-2 ml-5 mr-5">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link exact to="/">Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            Kết quả tìm kiếm
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="course-title">
                    <h3>Danh sách khóa học</h3>
                </div>
                <div className="row m-5">
                    {this.renderSearchResult()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courseListBySearch: state.ManagerCoursesReducer.courseListBySearch
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        getCoursesListByKeySearch: (keySearch) => {
            dispatch(getCoursesListByKeySearchAction(keySearch));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(SearchResult);
