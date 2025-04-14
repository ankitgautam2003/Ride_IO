import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const submitHandler = async (e)=>{
      e.preventDefault();
      const userData = {
        email: email,
        password: password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

      setEmail('')
      setPassword('')

      if (response.status === 200) {
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
      }
    }
    
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40skIAtoMk1RZDs3klI55FtdCNeiinRc_VQ&s" 
          alt="Logo" 
          className='w-16' 
        />
        <form onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>Enter Your Email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type='email'
            placeholder='xyz@mail.some' 
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='Password' 
          />
          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'
          >
            Login
          </button>
        </form>
        <p className='text-center'>
          New Here?{' '}
          <Link className='text-blue-600' to='/signup'>
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link 
          to='/captain-login' 
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg'
        >
          Signin as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
