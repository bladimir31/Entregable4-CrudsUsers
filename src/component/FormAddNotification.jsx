import React from 'react'
import "./FormNotification.css"
import {FaUserCheck, FaCheckCircle } from "react-icons/fa"

const FormAddNotification = ({ notiAddClose, setNotiAddClose }) => {

  const handleCloseNoti = () => {
    setNotiAddClose(true)
  }

  return (
    <div className={`Notification ${notiAddClose && 'Notification_Disable'}`}>
      <div className='background'></div>
      <article className='Text'>
        <div className='box_check'>
          <FaUserCheck className='check1' />
          <FaCheckCircle className='check2' />
        </div>
        <h3 className='Text-h3'>The user has been added successfully</h3>
        <button onClick={handleCloseNoti} className="Btn-ok">OK</button>
      </article>
    </div>
  )
}

export default FormAddNotification