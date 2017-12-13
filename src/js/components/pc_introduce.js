import React, { Component } from 'react';
import {Row,Col} from 'antd'
function Introduce(){
  return(

    <Row>
      <Col span={6}></Col>
      <Col span={16} className="footer introduce">
      <p>
      本名王丙玖，因为别人都倒着叫我，故昵称九饼，来自江苏徐州，在昆明读艺术类本科，期间认识一个武汉伢，所以来到这里，现已定居武汉。我掌握的技能很杂乱，
      都是视图层的东西，逻辑很一般，请求文件数据展示到前台仅仅会使用，复杂的就歇菜了。现在正展望未来，准备拜一个大牛为师，带带我，在此谢过了。
      </p>

      </Col>

      <Col span={2}></Col>
    </Row>
  )
}

export default Introduce;