import React from 'react'
import {
    Row,
    Col,
    Tabs,
    Card,
    Carousel 
} from 'antd'
const TabPane=Tabs.TabPane
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    hashHistory
  } from 'react-router-dom'



export default class PCNewsImageBlock extends React.Component{
    constructor(){
        super()
        this.state={
            news:''
        }
    }
    componentWillMount(){

         var myFetchOptions = {
		 	method: 'GET'
		 };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count,myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news: json}));
        

    }
    render(){
        const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styeH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
        const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<div key={index} className="imageblock">
					<a to={`details/${newsItem.uniquekey}`} target="_blank">
						<div className="custom-image">
							<img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
						</div>
						<div className="custom-card">
							<h3 style={styeH3}>{newsItem.title}</h3>
							<p>{newsItem.author_name}</p>
						</div>
					</a>
				</div>
			))
		    : '没有加载到';
    
        return (
            <div className="topNewsList">
                <Card title={this.props.cartTitle} bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}

