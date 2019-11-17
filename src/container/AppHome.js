import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
    }
    

    render() {
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff'}}>住吧家居</NavBar>
                <Carousel
                    autoplay={false}
                    infinite
                    
                    >
                    {this.state.data.map(val => (
                        <a style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                        <img
                            src={`img/1.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />    
                        </a>
                    ))}
                    
                </Carousel>       
                <img src={`img/2.png`} style={{width:"100%"}}></img>  
                <img src={`img/3.png`} style={{width:"100%"}}></img>    
            </div>
            
        )
    }
}







  