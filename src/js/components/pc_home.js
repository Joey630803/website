import React, { Component } from 'react';

import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'

function Home(){
    const settings={
        dots:true,
        easing:'linear',
        speed:250
        
    }
  return(
    <Row>
        <Col span={6}></Col>
        <Col span={16} className="footer">
            <div>
                <div className="carousel">
                    <Carousel {...settings} autoplay>
                        <div><img src="./src/images/1.png" /></div>
                        <div><img src="./src/images/2.png" /></div>
                        <div><img src="./src/images/3.png" /></div>
                        <div><img src="./src/images/4.png" /></div>
                    </Carousel>
                </div>
            </div>
        </Col>

        <Col span={2}></Col>
    </Row>
  )
}

export default Home;