import React from 'react'
import profile from '../img/profile.png'
import {FaRegImage, FaRegListAlt, FaRegSmile, FaCalendarCheck} from 'react-icons/fa'

const CreateTweet = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__profile">
                    <img src={profile} alt="profile" />
                </div>
                <div className="create__input">
                    <input type="text" className="create_control" placeholder="What's Happening" />
                </div>
            </div>
            <div className="create__second">
                <div className="create__icons">
                    <FaRegImage className="ic" />
                    <FaRegListAlt className="ic" />
                    <FaRegSmile className="ic" />
                    <FaCalendarCheck className="ic" />
                </div>

                <div className="create__btn">
                    <a href="">Tweet</a>
                </div>
            </div>
        </div>
    )
}

export default CreateTweet
