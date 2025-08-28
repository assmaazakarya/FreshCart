import { useContext } from 'react'
import { AuthContext } from '../../Context/Auth.Context'
import { Navigate, useLocation } from 'react-router'

export default function ProtectedRoute({children}) {
  
let location = useLocation()
  
const {token} = useContext (AuthContext)

  if(token === null ){
   return <Navigate to="/login" state={{from:location.pathname}} />
  }else{
   return children
  }


}
