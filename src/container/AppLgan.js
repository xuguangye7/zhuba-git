import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
];

export default class AppLgan extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#fff', marginRight: '16px' }} />,
                    ]}
                    >灵感</NavBar>
                    <Tabs tabs={tabs2}
                    initialPage={1}
                    tabBarUnderlineStyle={{border:'2px solid #ffdb2c'}}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
                        <div style={{width:'100%'}}>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{width:'100%'}}>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{width:'100%'}}>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{width:'100%'}}>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{width:'100%'}}>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <div style={{width:'100%'}}>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                            <img src={`img/21.png`} style={{width:"100%"}}></img>
                            <img src={`img/22.png`} style={{width:"100%"}}></img>
                        </div>
                    </div>
                </Tabs>  
            </div>
        )
    }
}
