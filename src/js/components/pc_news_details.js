import React from 'react'
import {
    Row,
    Col,
    Tabs,
    Card,
    Carousel 
} from 'antd'

import PCHeader from './pc_header';
import PCFooter from './pc_footer';



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



class PCNewsDetails extends React.Component{
    constructor(){
        super()
        this.state={
            newsItem:''
        }
    }
	componentDidMount() {
        const {history, location, match} = this.props;
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
		});
	};
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
    render(){
        return (
            <div>

				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div  dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
						
					</Col>
					<Col span={6}></Col>
					<Col span={2}></Col>
				</Row>


			</div>
        )
    }
}
export default PCNewsDetails
