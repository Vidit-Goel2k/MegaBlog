/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import './App.css'

import authService from './appwrite/auth_service';

import { useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'

import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }

      return loading ? (null) : (
        <div></div>
      )

    })
    .finally(() => setLoading(false))
  }, [])

  return loading ? (null) : (
    <>
      <div className='flex flex-wrap content-between min-h-screen bg-gray-400 ' >
        <div className='block w-full ' >
          <Header />
          <main>
            {/* //TODO: <Outlet /> */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
