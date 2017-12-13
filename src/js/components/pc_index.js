import React from 'react'
import PCHeader from './pc_header'
import PCfooter from './pc_footer'
import PCNewContainer from './pc_newscontainer'
import Home from './pc_home'
import Introduce from './pc_introduce'
import Contact from './pc_contact'

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

export default class PCIndex extends React.Component{
    render(){
        return (
            <Router>
            <div>
               <PCHeader/>
               <Route exact path="/"  render={()=>(<Redirect to="/home"/>)} />
                <Route  path="/home" component={Home}/>
                <Route  path="/news" component={PCNewContainer}/>
                <Route  path="/introduce" component={Introduce}/>
                <Route  path="/contact" component={Contact}/>
               <PCfooter/>
            </div>
            </Router>
        )
    }
}
