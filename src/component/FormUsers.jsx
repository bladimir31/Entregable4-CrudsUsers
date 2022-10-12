import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./FormUsers.css"
import { FaRegWindowClose } from "react-icons/fa"


const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({ createNewUser, updateInfo,setUpdateInfo, updateUserById, formClose,setFormClose }) => {
    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser(data)
        }
        reset(defaultValues)
    }

    const handleCloseForm = () => {
        setFormClose(true)
    }


    return (
        <article className={`Container-Form ${formClose && 'Container-Form-Disable'}`}>
            <form className='box_form' onSubmit={handleSubmit(submit)}>
                <div className='Form-title'>
                    <h2>{updateInfo ? "Edit User" : "New User"}</h2>
                    <FaRegWindowClose onClick={handleCloseForm} className='btnClose' />
                </div>
                <div className='Item_Form'>
                    <label htmlFor="email">Email </label>
                    <input type="email" id='email' placeholder='Enter your email' {...register('email')} />
                </div>

                <div className='Item_Form'>
                    <label htmlFor="password">Password </label>
                    <input type="password" id='password' placeholder='Enter password' {...register('password')} />
                </div>

                <div className='Item_Form'>
                    <label htmlFor="first_name">First_Name </label>
                    <input type="text" id='first_name' placeholder='Enter First-Name' {...register('first_name')} />
                </div>

                <div className='Item_Form'>
                    <label htmlFor="last_name">Last_Name </label>
                    <input type="text" id='last_name' placeholder='Enter Last-Name' {...register('last_name')} />
                </div>

                <div className='Item_Form'>
                    <label htmlFor="birthday">Birthday </label>
                    <input type="date" id='birthday' {...register('birthday')} />
                </div>

                <button onClick={handleCloseForm} className='Btn_Form'>{updateInfo ? "Update" : "Create"}</button>
            </form>
            <div className='Background_Form'></div>
        </article>
    )
}

export default FormUsers