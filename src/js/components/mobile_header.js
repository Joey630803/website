import React from 'react'
import {Row,Col,Menu,Icon} from 'antd'
const SubMenu =Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup

export default class MobileHeader extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return (
            <div id="mobileheader">
                <header>
                <img src="./src/images/logo.png" alt="logo"/>
                <span>jiubing</span>
                </header>
            </div>
        )
    }
}
