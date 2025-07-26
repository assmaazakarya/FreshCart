import { createContext, useState } from "react";
import { forgetPassword, resetPassword, verifyResetCode } from "../services/authService/authService";
import { toast } from "react-toastify";

export const AuthContext = createContext(null)

export default function AuthProvider({children}){

    const [token , setToken] = useState(localStorage.getItem('token')|| sessionStorage.getItem('token'))
    
     function logOut(){
        setToken(null)
        localStorage.removeItem('token') 
        sessionStorage.removeItem('token')
     } 

     async function handleForgetPassword(values){
        try {
           const toastId = toast.loading("We are sending you a code")
           const response =  await forgetPassword(values)
           if(response.success){
            toast.dismiss(toastId)
            toast.success(response.data.message)
        }
        } catch (error) {
            toast.error(error)         
        }
     }
     
     async function handleResetCode(values){
     const toastId = toast.loading("We are checking your code")
        try {
           const response =  await verifyResetCode(values)
           if(response.success){
            toast.dismiss(toastId)
            toast.success(response.data.status)
            
        }
   
    } catch (error) {
            toast.error(error.message)         

        }
     }
     
     async function handleResetPassword(values) {
        const toastId = toast.loading("We are updating your password")
        try {
          
           const response =  await resetPassword(values)
           if(response.success){
            toast.dismiss(toastId)
            toast.success("Your Password has been updated successfully")
        }
          return true   
        } catch (error) {
            toast.error(error.message)  
            toast.dismiss(toastId)
            return false       
        }  
     }
       
    return <AuthContext.Provider value={{ token , setToken ,logOut , handleForgetPassword , handleResetCode , handleResetPassword}}>
     {children}
    </AuthContext.Provider>
}