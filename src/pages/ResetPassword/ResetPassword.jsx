import { faArrowRight, faEnvelope, faEnvelopeOpenText, faEye, faHeadset, faKey, faLock, faPaperPlane, faQuestionCircle, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik, validateYupSchema } from "formik";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from 'yup' 
import { AuthContext } from "../../Context/Auth.Context";

export default function ResetPassword() {

const { handleResetPassword} = useContext(AuthContext)


const [showPassword,setShowPassword] = useState(false)
const [showConfirmPassword,setShowConfirmPassword] = useState(false)

function togglePassword(){
  setShowPassword(!showPassword)
}
function toggleConfirmPassword(){
  setShowConfirmPassword(!showConfirmPassword)
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
const [green1 , setGreen1] = useState(false)
const [green2 , setGreen2] = useState(false)
const [green3 , setGreen3] = useState(false)
const [green4 , setGreen4] = useState(false)
const [green5 , setGreen5] = useState(false)

const navigate = useNavigate()
const setTimeoutId = null 
async function handleForget(vlaues){
  let res =  await handleResetPassword(vlaues)
  setTimeoutId = setTimeout(() => {
    if(res){ 
      navigate('/login')
    }else{
      navigate('/signup')}
  }, 3000);
  
}

useEffect(()=>{
return clearTimeout(setTimeoutId)
},[])
 const schema = yup.object({
   email: yup.string().required("Email is required").email("Email is invalid"),
   newPassword: yup.string().required("Password is required").min(8, 'Password must be at least 8 characters').matches(passwordRegex ,"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."),
   rePassword : yup.string().required("Confirm your password please").oneOf([yup.ref('newPassword')],'Passwords must be the same').min(8, 'Password must be at least 8 characters'), 
  })
 
 const formik = useFormik({
   initialValues:{
     email:'',
     newPassword :'',
     rePassword :''
   },
   onSubmit:handleForget,
   validationSchema:schema
 })

function stength(password){
setGreen1(false)
setGreen2(false)
setGreen3(false)
setGreen4(false)
setGreen5(false)

if(/[A-Z]/.test(password)) {setGreen1(true)} 
if(/[a-z]/.test(password)) {setGreen2(true)} 
if(password.length >= 8) {setGreen3(true)} 
if(/[!@#$%^&*]/.test(password)) {setGreen4(true)} 
if(/[0-9]/.test(password)) {setGreen5(true)} 
}

useEffect(()=>{
 stength(formik.values.newPassword)
},[formik.values.newPassword])

 return <>
     <section className='bg-gray-50'>
        <div className="container">
          <div className='py-15 space-y-5 flex flex-col items-center justify-center '>
            <div className='border border-gray-200 shadow rounded-lg bg-white md:w-1/2 lg:w-1/3 space-y-4 p-8 text-center  flex flex-col items-center justify-center'>
              <div className='size-15 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center'>
                <FontAwesomeIcon icon={faKey}  className='text-2xl'/>
              </div>
              <h2 className='text-lg font-bold text-gray-900'>Reset Password</h2>
              <p className='text-gray-500 text-sm'>Enter your email address and new password to reset your account password</p>
              <form className='flex flex-col gap-5 w-full ' onSubmit={formik.handleSubmit}>
               <div className='flex items-start flex-col gap-2  '>
                 <label htmlFor="email" className='font-semibold text-sm'>Email Address</label>
                 <div className="relative w-full">
                <FontAwesomeIcon className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' icon={faEnvelope}/>
                <input 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email" 
                className='ps-6 form-control w-full border-gray-200 placeholder:text-gray-900 placeholder:text-sm ' name="email" id="email"  placeholder='Enter your email address'/>
                  </div> 
                 {
                  formik.errors.email && formik.touched.email && <p className='text-red-600 text-sm'>*{formik.errors.email} </p>
                  }
               </div>
               
               
               <div className='flex items-start flex-col gap-2  '>
                <label htmlFor="newPassword" className='font-semibold text-sm'>New Password </label>
                <div className="relative w-full">
                <FontAwesomeIcon className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' icon={faLock}/>
                <FontAwesomeIcon onClick={togglePassword} className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-400' icon={faEye}/>
                <input 
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showPassword?"text":"password"} 
                className='ps-6 form-control w-full border-gray-200 placeholder:text-gray-900 placeholder:text-sm' name="newPassword" id="newPassword"  placeholder='Enter new password'/> 
               
                </div>
                <p className='text-gray-600 text-xs'>Password must contain</p>
                <ul className="*:flex *:items-center *:gap-3">
                  <li>
                    <span className={`size-3 rounded-full ${green3?'bg-primary-500 shadow-md':'bg-gray-200'} `}></span>
                    <p className="text-xs text-gray-600 ">At least 8 characters</p>
                  </li>
                   <li>
                    <span className={`size-3 rounded-full ${green1?'bg-primary-500 shadow-md':'bg-gray-200'} `}></span>
                    <p className="text-xs text-gray-600">One Uppercase letter</p>
                  </li>
                   <li>
                    <span className={`size-3 rounded-full ${green2?'bg-primary-500 shadow-md':'bg-gray-200'} `}></span>
                    <p className="text-xs text-gray-600">One Lowercase letter</p>
                  </li>
                    <li>
                    <span className={`size-3 rounded-full ${green5?'bg-primary-500 shadow-md':'bg-gray-200'} `}></span>
                    <p className="text-xs text-gray-600">One number</p>
                  </li>  
                  <li>
                    <span className={`size-3 rounded-full ${green4?'bg-primary-500 shadow-md':'bg-gray-200'} `}></span>
                    <p className="text-xs text-gray-600">One special character</p>
                  </li>
                  </ul> 
               </div>


             <div className='flex items-start flex-col gap-2  '>
                <label htmlFor="rePassword" className='font-semibold text-sm'>Confirm New Password </label>
                <div className="relative w-full">
                <FontAwesomeIcon className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-400' icon={faLock}/>
                <FontAwesomeIcon onClick={toggleConfirmPassword} className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-400' icon={faEye}/>
                <input 
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={showConfirmPassword?"text":"password"} 
                className='ps-6 form-control w-full border-gray-200 placeholder:text-gray-900 placeholder:text-sm' name="rePassword" id="rePassword"  placeholder='Confirm new password'></input> </div>
                {
                 formik.touched.rePassword&&formik.errors.rePassword&& <p className="text-sm text-red-600 text-start">*{formik.errors.rePassword}</p>
                }
               </div>

               <button type='submit' className='btn bg-primary-600 text-white'>
                Reset Password
                </button>
              </form>
              <p className='text-gray-600'>Remember your password? <Link className='text-primary-600' to={'/login'}>Sign in </Link></p>
            </div>  
          </div>
        </div>
       
      </section>
  </>
}
