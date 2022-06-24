import React, {useState} from "react";
import "./Siderbar.css"
import Logo from "../../images/heart-rate-monitor.png"
import {SidebarData} from "../../Data/Data";
import {UilSignOutAlt} from "@iconscout/react-unicons";


const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="Логотип бокового меню"/>
                <span>
                    <span>G</span>Diagn<span>o</span>sis
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected===index?'menuItem active': 'menuItem'}
                        key={index}
                        onClick={() => setSelected(index)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar