import React from 'react'
import {FaTwitter, FaHome, FaHashtag,FaRegBell,FaRegEnvelope,FaRegBookmark,FaClipboardList,FaUserAlt,FaMehBlank} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><a href=""><FaTwitter className="icon logo" /></a></li>
                <li><a href=""><FaHome className="icon" />Home</a></li>
                <li><a href=""><FaHashtag className="icon" />Explore</a></li>
                <li><a href=""><FaRegBell className="icon" />Notifications</a></li>
                <li><a href=""><FaRegEnvelope className="icon" />Messages</a></li>
                <li><a href=""><FaRegBookmark className="icon" />Bookmarks</a></li>
                <li><a href=""><FaClipboardList className="icon" />Lists</a></li>
                <li><a href=""><FaUserAlt className="icon" />Profile</a></li>
                <li><a href=""><FaMehBlank className="icon" />More</a></li>
                <div className="sidebar__btn">
                    <a href="">Tweet</a>
                </div>
            </ul>
            
        </div>
    )
}

export default Sidebar
