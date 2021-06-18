import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarDataAdmin } from './SidebarDataAdmin'
import './NavbarAdmin.css'
import { IconContext } from 'react-icons'
import h1 from './hello.jpg'
import bell from './img/bell.png'
 
function NavbarAdmin() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>

                    <Link to='#' className="bell-bar">
                        <div className="bell-bars">
                            <img src={bell} />
                        </div>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" >
                        <li className="navbar-toggle">
                            <Link to='#' className="menu-bars">
                                {/* <AiIcons.AiOutlineClose /> */}
                            </Link>
                        </li>
                        <div className='nav-img'>
                            <img src={h1} />
                        </div>
                        <div className='nav-name'> 
                            <p>Admin</p>
                        </div>

                        {SidebarDataAdmin.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className='span-title'>{item.title }</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavbarAdmin;
