import React, { Component } from 'react'
import { Card} from 'antd';

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
                        <a href="/course-detail">Name</a>
                    </h6>
                    <span>Description</span>
                </div>
            </Card>
        )
    }
}
