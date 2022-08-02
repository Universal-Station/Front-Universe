import React, { Component } from "react";
import { Drawer, Button } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import '../../css/NavBar.css'



class Navbar extends Component{
    state ={
        
        visible: false
    } 
    showDrawer = () =>{
        this.setState({
            visible: true,
        });
    };
    onClose =() => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <a href="">logo</a>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    <div className="rightMenu">
                        <RightMenu />
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        width={155}
                        placement="right"
                        closable={true}
                        onClose= {this.onClose}
                        visible={this.state.visible}
                        getContainer={false}
                        style={{
                            position: 'absolute',
                          }}
                        >
                            <RightMenu />
                            <LeftMenu />
                        </Drawer>
                </div>
            </nav>
        )
    }
}

export default Navbar;