import React from 'react'
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
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    hashHistory
  } from 'react-router-dom'
import axios from 'axios'

const FormItem=Form.Item
const SubMenu =Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup



class PCHeader extends React.Component{
    constructor(){
        super()
        this.state={
            current:'home',
            modalVisible:false,
            action:'login',
            hasLogined:false,
            username:''
        }
    }
    componentWillMount(){
        if (localStorage.username!=''&&localStorage.username!='undefined') {
            this.setState({hasLogined:true});
            this.setState({username:localStorage.username,userid:localStorage.userid});
        }
        if(localStorage.current){
            this.setState({current:localStorage.getItem('current')})
        }
    }
    setModalVisible(value){
        this.setState({modalVisible:value})
    }

    setHasLogined(value){
        this.setState({hasLogined:value})
    }
    setUserName(value){
        this.setState({username:value})
    }
    logout(){
        localStorage.username = '';
		this.setState({hasLogined:false});
    }
    handleClick(e){

        if(e.key=='login'){
            this.setState({current:'login'})
            this.setModalVisible(true)
        }else{
            this.setState({current:e.key})
            this.setModalVisible(false)
            localStorage.setItem('current', e.key)

        }
    }
    handleSubmit(e){
        e.preventDefault();

        var myFetchOptions={
            method:'GET'
        }
        this.props.form.validateFields((err,values)=>{
            if(!err){
                axios.post('http://111.231.146.57:9997/system/user/login',
                {username:values.userName,password:values.passWord}).
                then(res=>{
                    this.setState({username:res.username})
                    if(res.data.code==='000'){
                        this.setModalVisible(false)
                        this.setHasLogined(true)
                        this.setUserName(values.userName)
                        message.success('成功了！');
                        localStorage.username = res.username
                        localStorage.password = res.password
                        
                    }else{
                        message.error(res.msg);
                    }
                })
            }
        })
        
    }
    render(){
        let {getFieldDecorator}=this.props.form;
        const userShow=this.state.hasLogined
        ?
        <Menu.Item key="logout" className="login">
            <Button type="primary" htmlType="button">{this.state.username}</Button>
            &nbsp;&nbsp;
            <span onClick={this.logout.bind(this)}><a>退出</a></span>
        </Menu.Item>
        :
        <Menu.Item key="login" className="login">
            <Icon type="appstore"/>登录
        </Menu.Item>;
        return (
            <header className="header">
                <Row>
                    <Col span={4}></Col>
                    <Col span={2}>
                        <a href="/" className="logo">
                            <img  src='./src/images/logo.png' alt="" />
                        </a>
                    </Col>
                    <Col span={14}>
                        <Menu  mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="home"><NavLink to="/home" activeClassName='active'><Icon type="layout" />首页</NavLink></Menu.Item>
                            <Menu.Item key="jianjie"><NavLink to="/introduce" activeClassName='active'><Icon type="notification" />简介</NavLink></Menu.Item>
                            <Menu.Item key="lianxi"><NavLink to="/contact" activeClassName='active'><Icon type="contacts" />联系方式</NavLink></Menu.Item>
                            <Menu.Item key="top"><NavLink to="/news" activeClassName='active'><Icon type="appstore"/>新闻</NavLink></Menu.Item>
                            {userShow}
                        </Menu>
<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
onCancel={()=>this.setModalVisible(false)} footer={null} width={350}>

        <Form onSubmit={this.handleSubmit.bind(this)}>

            <FormItem label="账户">
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your userName!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="text" placeholder="username" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('passWord', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="password" />
                )}
            </FormItem>

            <Button type="primary" htmlType="submit">登录</Button>
        </Form>

</Modal>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </header>
        )
    }
}
export default PCHeader = Form.create()(PCHeader);
