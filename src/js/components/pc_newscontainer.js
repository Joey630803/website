import React from 'react'
import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'
const TabPane=Tabs.TabPane
import axios from 'axios'
import PCNewsBlock from './pc_news_block'




export default class PCNewsContainer extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={16} >
                        <Tabs className="tabs_news">
                        <TabPane tab="头条新闻" key="1">
                            <PCNewsBlock count={6} type="top" width="100%" bordered="false"/>
                        </TabPane>
                            <TabPane tab="国际" key="2">
								<PCNewsBlock count={6} type="guoji" width="100%" bordered="false"/>
							</TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}

