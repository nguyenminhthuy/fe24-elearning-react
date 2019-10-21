import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default class CourseItem extends Component {
    render() {
        return (
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <span>Price: 0 VNĐ</span>,
                    <span>Detail</span>
                ]}
            >
                <div className="desc">
                    <h6>
                        <a href="/course-detail">Course Name</a>
                    </h6>
                    <span>Description</span>
                </div>
            </Card>
        )
    }
}
