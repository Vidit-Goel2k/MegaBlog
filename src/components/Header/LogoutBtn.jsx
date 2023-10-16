import { useDispatch } from 'react-redux';
import authService from './../../appwrite/auth_service';
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {

  const dispatch = useDispatch()
  const logoutHandler = () => { 
    authService.logout()
      .then(()=>{
        dispatch(logout())
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <button className='inline-block px-6 py-2 duration-200 rounded-full hover:bg-blue-100 ' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn

