import React from 'react'
import "./FormDeleteNotification.css"
import {FaUserTimes, FaCheckCircle } from "react-icons/fa"

const FormDeleteNotification = ({ notiDtClose, setNotiDtClose }) => {

  const handleCloseNoti = () => {
    setNotiDtClose(true)
  }

  return (
    <div className={`DtNotification ${notiDtClose && 'DtNotification_Disable'}`}>
      <div className='Dtbackground'></div>
      <article className='DtText'>
        <div className='Dtbox_check'>
          <FaUserTimes className='Dtcheck1' />
          <FaCheckCircle className='Dtcheck2' />
        </div>
        <h3 className='DtText-h3'>The user has been successfully deleted</h3>
        <button onClick={handleCloseNoti} className="DtBtn-ok">OK</button>
      </article>
    </div>
  )
}

export default FormDeleteNotification