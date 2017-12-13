import React, { Component } from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  message
  
} from 'antd'
function Contact(){
  return(

    <Row>
      <Col span={6}></Col>
      <Col span={16} className="footer">
      <p style={{textAlign:'left'}}>
      <Icon type="mobile" />&nbsp;&nbsp;18872280253

      </p>
      <p style={{textAlign:'left',marginTop:'10px'}}>

      <img src="./src/images/qq.png" style={{width:'15px',verticalAlign:'middle'}}/>&nbsp;&nbsp;<span>1297393811</span>
      </p>
      

      </Col>

      <Col span={2}></Col>
    </Row>
  )
}

export default Contact;