import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import FormUsers from './component/FormUsers'
import UserCard from './component/UserCard'
import FormAddNotification from './component/FormAddNotification'
import { ImUserPlus } from "react-icons/im"
import FormUpdateNotification from './component/FormUpdateNotification'
import FormDeleteNotification from './component/FormDeleteNotification'

const baseURL = 'http://144.126.218.162:9000'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose,setFormClose] = useState(true)
  const [notiAddClose,setNotiAddClose] = useState(true)
  const [notiUpClose,setNotiUpClose] = useState(true)
  const [notiDtClose,setNotiDtClose] = useState(true)


  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setNotiAddClose(false)
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => { 
        console.log(res.data)
        getAllUsers()
        setNotiDtClose(false)
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL,data)
      .then(res => { 
        console.log(res.data)
        setNotiUpClose(false)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () =>{
    setFormClose(false)
}

  return (
    <div className="App">

      <section className='navbar'>
        <h1>Users</h1>
        <button onClick={handleOpenForm}><ImUserPlus /> Create new user</button>
      </section>
      <FormUsers
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        formClose={formClose}
        setFormClose={setFormClose}

      />

      <section className='Box_UserCard'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
            />
          ))
        }
      </section>
      <FormAddNotification 
      notiAddClose={notiAddClose}
      setNotiAddClose={setNotiAddClose}
      />
      
      <FormUpdateNotification
       setNotiUpClose={setNotiUpClose}
       notiUpClose={notiUpClose}
      />

      <FormDeleteNotification
       notiDtClose={notiDtClose}
       setNotiDtClose={setNotiDtClose}
      />

    </div>
  )
}

export default App
