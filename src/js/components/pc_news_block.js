import React from 'react'
import {
    Row,
    Col,
    Tabs,
    Card,
    Carousel 
} from 'antd'
const TabPane=Tabs.TabPane
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    hashHistory
  } from 'react-router-dom'



export default class PCNewsBlock extends React.Component{
    constructor(){
        super()
        this.state={
            news:''
        }
    }
    componentWillMount(){
        // axios({
        //     method:'GET',
        //     url:`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + ${this.props.type} + "&count=" +${this.props.count}`,
        //     headers:{
        //         'content-Type': 'application/json; charset=UTF-8',
        //         'X-Requested-With':'XMLHttpRequest'
        //     }
        // })then(json=>{
        //     this.setState({news: json})
        // })
         var myFetchOptions = {
		 	method: 'GET'
		 };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count,myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({news: json}));
        

    }
    render(){
        const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
					<a to={`details/${newsItem.uniquekey}`} target="_blank">
						{newsItem.title}
					</a>
				</li>
			))
		    : '没有加载到任何狗屁';
    
        return (
            <div>
                <Card>
                   <ul className="news_ul">
                    {newsList}
                   </ul>
                </Card>
            </div>
        )
    }
}

