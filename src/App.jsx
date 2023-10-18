import { useEffect, useState } from 'react'
import './App.css'

import authService from './appwrite/auth_service';

import { useDispatch } from 'react-redux'
import {login, logout} from './store/authSlice'

import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
      <div className='flex flex-wrap content-between min-h-screen bg-gray-400 ' >
        <div className='block w-full ' >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null
}

export default App
