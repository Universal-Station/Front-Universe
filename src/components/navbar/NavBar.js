import React, { Component } from "react";
import { Drawer, Button } from "antd";
import LeftMenu from "./LeftMenu";
<<<<<<< HEAD
import RightMenu from "./RightMenu";
import '/home/will/Proyecto-Universe/front-universe/src/css/NavBar.css'
=======
import RightMenu from "./RightMenu.js";
import '../../css/NavBar.css'
>>>>>>> 8b1a6405455fc540b8fc2fa6567e9eb968fa7011
class Navbar extends Component{
    state ={
        current: 'mail',
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
                        title = "Dasic Drawer"
                        placement="rigth"
                        closable={false}
                        onClose= {this.onClose}
                        visible={this.state.visible}
                        >
                            <leftMenu />
                            <RightMenu />
                        </Drawer>
                </div>
            </nav>
        )
    }
}

export default Navbar;