import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';

export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon type="shopping-cart" style={{ color:'#fff', marginRight: '16px' }} />,
                    ]}
                    >我的</NavBar>
                    我的
            </div>
        )
    }
}
