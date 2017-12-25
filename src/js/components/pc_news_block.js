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
import {Link,NavLink} from 'react-router-dom'



class PCNewsBlock extends React.Component{
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
             method: 'GET',

		 };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count,myFetchOptions)
        .then(res =>res.json()).then(json=>{
            this.setState({news: json})
        })
        

    }
    render(){
        const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
					<Link to={`/details/${newsItem.uniquekey}`} target="_blank">
						{newsItem.title}
					</Link>
				</li>
			))
		    : '没有加载到';
    
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
export default PCNewsBlock
