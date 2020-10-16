import { faClipboardList, faCommentAlt, faPlug, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = ({page, setPage, isAdmin}) => {

    return (
        <div>
            <div className="sidebar-area">
            <ul className="nav flex-column">
                {
                    isAdmin ? 
                    <div>
                        <li className="nav-item" onClick={()=>setPage("service list")}>
                            <FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon> <span> Service List</span>
                        </li>
                        <li className="nav-item" onClick={()=>setPage("add service")}>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> <span> Add Service</span>
                        </li>
                        <li className="nav-item" onClick={()=>setPage("make admin")}>
                            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> <span> Make Admin</span>
                        </li>
                    </div> :

                    <div>
                        <li className="nav-item mt-5" onClick={()=>setPage("order")}>
                            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> <span> Order</span>
                        </li>
                        <li className="nav-item" onClick={()=>setPage("service list")}>
                            <FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon> <span> Service List</span>
                        </li>
                        <li className="nav-item" onClick={()=>setPage("review")}>
                            <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon> <span> Review</span>
                        </li>
                    </div>
                }
                
                
            </ul>
            </div>
        </div>
    );
};

export default Sidebar;