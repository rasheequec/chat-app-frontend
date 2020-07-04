import React from "react"
import { UserOutlined } from '@ant-design/icons';
import './nav.css'

const Nav = () => {
    return(
        <div id="navbar">
            <div className="profile">
            <UserOutlined />
            </div>
        </div>
    )
}
export default Nav