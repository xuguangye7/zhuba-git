import React, { Component } from 'react'
import { SearchBar,NavBar, Icon, Tabs ,Grid} from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
const name=['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
const datas = Array.from(new Array(10)).map((_val, i) => ({
    icon: '../img/3'+i+'.png',
    text: name[i],
}));
export default class AppScheng extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#fff'}}
                    rightContent={[
                        // <Icon type="shopping-cart" style={{ color:'#fff', marginRight: '16px' }} />,
                        <img src={require("../img/cart.png")} style={{width:"20%",marginRight:15}}></img>
                    ]}
                    >商城</NavBar>
                    <SearchBar placeholder="Search" maxLength={8} />
                <Carousel
                    autoplay={false}
                    infinite
                    >
                    {this.state.data.map(val => (
                        <a style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                        <img
                            src={`../img/332.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                        </a>
                    ))}
                    
                </Carousel>       
                <Grid data={datas}
                        columnNum={5}
                        renderItem={dataItem => (
                            <div>
                                <img src={dataItem.icon} style={{ width: '50%', height: '50%' }} alt="" />
                                <div style={{fontSize: '10px'}}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                        />
                <img src={`../img/331.png`} style={{width:"100%"}}></img>  
                <img src={`../img/331.png`} style={{width:"100%"}}></img>    
            </div>
            
        )
    }
}
