import React from 'react'
import PCHeader from './pc_header'
import PCfooter from './pc_footer'
import PCNewContainer from './pc_newscontainer'
import PCNewsDetails from './pc_news_details'
import Home from './pc_home'
import Introduce from './pc_introduce'
import Contact from './pc_contact'

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    hashHistory,
    withRouter
} from 'react-router-dom'

class PCIndex extends React.Component{
    constructor(){
        super()
        this.state={
            paramsList:null
        }
    }
    render(){

        return (
            <Router history={hashHistory}>
            <div>
               <PCHeader/>
                
                        <Route exact path="/"  render={()=>(<Redirect to="/home"/>)} />
                        <Route  path="/home" component={Home}/>
                        <Route  path="/news" component={PCNewContainer}/>
                        <Route  path="/introduce" component={Introduce}/>
                        <Route  path="/contact" component={Contact}/>
                        <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>  
                
                <PCfooter/>
            </div>
            </Router>
            
        )
        
    }
    
}

export default PCIndex