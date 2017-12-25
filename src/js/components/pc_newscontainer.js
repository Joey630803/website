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
import PCNewsImageBlock from './Pc_news_image_block'




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
                    <Col span={6}>
                    </Col>
                    <Col span={18} >
						<PCNewsImageBlock count={9} type="guonei" width="500px" cartTitle="国内新闻" imageWidth="132px"/>
                        
                        <Tabs className="tabs_news">
                        <TabPane tab="娱乐" key="1">
                            <PCNewsBlock count={6} type="yule" width="100%" bordered="false"/>
                        </TabPane>
                            <TabPane tab="国际" key="2">
								<PCNewsBlock count={6} type="guoji" width="100%" bordered="false"/>
							</TabPane>
                        </Tabs>

                    </Col>

                </Row>
            </div>
        )
    }
}

