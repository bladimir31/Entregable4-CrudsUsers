import React from 'react'
import "./FormNotificationUpdate.css"
import {FaUserCog, FaCheckCircle } from "react-icons/fa"

const FormUpdateNotification = ({ notiUpClose, setNotiUpClose }) => {

    const handleCloseNoti = () => {
        setNotiUpClose(true)
    }

    return (
        <div className={`NotificationUp ${notiUpClose && 'NotificationUp_Disable'}`}>
            <div className='Up_background'></div>
            <article className='UpText'>
                <div className='Upbox_update'>
                    <FaUserCog className='update1' />
                    <FaCheckCircle className='update2' />
                </div>
                <h3 className='UpText-h3'>The user has been successfully updated</h3>
                <button onClick={handleCloseNoti} className="BtnUp">OK</button>
            </article>
        </div>
    )
}

export default FormUpdateNotification