import React from 'react'
import './UserCard.css'

import { FaRegEdit,FaRegTrashAlt,FaGift } from "react-icons/fa"

const UserCard = ({user,deleteUserById,setUpdateInfo,setFormClose}) => {

const handleEdit = () => {
   setUpdateInfo(user)
   setFormClose(false)
}

  return (
    <article className='UserCard'>
        <h2 className='Name'>{`${user.first_name} ${user.last_name}`}</h2>
        <hr className='line'/>
        <ul className='Info'>
            <li className='Info_item'><span>EMAIL</span>{user.email}</li>
            <li className='Info_item'><span>BIRTHDAY</span><p><FaGift/> {user.birthday}</p></li>
        </ul>
        <div className='Buttons'>
            <FaRegTrashAlt className='btn_trash' onClick={() => deleteUserById(user.id)} />
            <FaRegEdit className='btn_edit' onClick={handleEdit}/>
        </div>
    </article>
  )
}

export default UserCard