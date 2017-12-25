import React, { Component } from 'react';
import {Row,Col} from 'antd'
function Introduce(){
  return(

    <Row>
      <Col span={6}></Col>
      <Col span={16} className="footer introduce">
      <p>
      九饼，来自江苏徐州，在昆明读艺术类本科，现已定居武汉。我掌握的技能很杂乱，
      都是视图层的东西，逻辑很一般，请求文件数据展示到前台仅仅会使用，复杂的就歇菜了。
      </p>

      </Col>

      <Col span={2}></Col>
    </Row>
  )
}

export default Introduce;