import {  faTruckFast ,faStar, faLock,  faUsers, faShieldHalved  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation, useNavigate, useResolvedPath } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { useContext, useState } from 'react'
import loginImg from '../../assets/login-img.png'
import { faEnvelope ,faEye, faEyeSlash ,faClock } from '@fortawesome/free-regular-svg-icons'
import { sendDataToLogin } from '../../services/authService/authService'
import { AuthContext } from '../../Context/Auth.Context'


export default function Login() {

// ? Variables 
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/

// ! Hooks 
const [isErrorExist,setIsErrorExist] = useState(null)
const [showPassword,setShowPassword] = useState(false)
const {setToken} = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from || '/'

// ^ Functions 
function togglePassword(){
  setShowPassword(!showPassword)
}

function handleChange(e){
  setIsErrorExist(null)
  formik.handleChange(e)
}

async function handleLogin(values){

  try {
   const response = await sendDataToLogin(values)

   if(response.success){
   toast.success("Welcome Back")
   setToken(response.data.token)
   if(values.rememberMe){
    localStorage.setItem("token",response.data.token)
   }else{
    sessionStorage.setItem("token",response.data.token) 
  }

   setTimeout(()=>{
   navigate(from)
    },3000)    
  }
    } catch (error) {
    console.log(error);
    setIsErrorExist(error.message)
    }
  
}


const schema = yup.object({
 
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required").min(8, 'Password must be at least 8 characters').matches(passwordRegex ,"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."),
 
})


const formik = useFormik({
  initialValues:{
    email:'',
    password:'',
    rememberMe:false
  },
  onSubmit:handleLogin,
  validationSchema:schema
})

  return <>
      <main className='py-12 bg-gray-50 border-t  border-gray-200 lg:border-0'>
        <div className="container grid lg:grid-cols-2 gap-5 lg:gap-0">
          {/* left side */}
          <div className='left px-9 space-y-5 pt-35 flex flex-col items-center text-center'>

             <div className='w-[500px] h-[400px] overflow-hidden rounded-xl shadow-lg bg-white'>
              <img src={loginImg} className='w-full h-full object-cover object-center' alt="" /> 
              </div>        

              <h2 className='text-3xl font-semibold'>Fresh Groceries Delivered</h2>

              <p className='text-gray-600'>Join thousands of happy customers who trurst FreshCart for their daily grocery needs</p>
              
            <ul className=' text-sm flex items-center space-x-8  *:flex *:items-center *:gap-2'>
              <li>
                <FontAwesomeIcon className='text-primary-600' icon={faTruckFast} />
                 <span className='text-gray-500 font-medium'>Fast Delivery</span>
              </li>
               <li>
                  <FontAwesomeIcon className='text-primary-600' icon={faShieldHalved} />                
                 <span className='text-gray-500 font-medium'>Secure Payment</span>
              </li>  
                <li>
                <FontAwesomeIcon className='text-primary-600' icon={faClock} />
                 <span className='text-gray-500 font-medium'>24 Support</span>
              </li>

            </ul>

          </div>
          {/* right side => form*/}
          <div className='right  p-12 bg-white rounded-xl shadow-xl space-y-8'>
           
            <div className='text-center space-y-3'>
              <h2 className='mb-3 text-3xl font-semibold'><span className='text-primary-600'>Fresh</span>Cart</h2>
              <h3 className='text-2xl font-semibold'>Welcome Back!</h3>
            <p className='text-gray-500'>Sign in to continue your fresh shoppingy experience</p>
            </div>
           
            <div className='grid  gap-3 *:inline-flex *:items-center *:gap-2 *:justify-center'>
              <button className='btn border border-gray-300/70 bg-transparent hover:bg-gray-100/50 transition-colors duration-150'>
                <FontAwesomeIcon icon={faGoogle} className='text-red-600' />
                <span className='font-normal'>Continue with Google</span>
              </button>
              <button className='btn border border-gray-300/70 bg-transparent  hover:bg-gray-100/50 transition-colors duration-150'>
                <FontAwesomeIcon icon={faFacebook} className='text-blue-600' />
                <span className='font-normal'>Continue with Facebook</span>
              </button>
            </div>


            <div className='w-full h-0.5 bg-gray-300/50 relative'>
              <span  className='text-gray-500 absolute left-1/2 top-1/2 -translate-1/2 bg-white w-58 flex justify-center items-center'>OR CONTINUE WITH EMAIL</span>
            </div>
          
            <form className='space-y-5' onSubmit={formik.handleSubmit} > 
              
             <div className="email gap-1 flex flex-col">
                <label htmlFor="email" className='font-semibold  text-sm'>Email</label>
                <div className='relative'>
                   <input className="w-full form-control ps-8" type="email" name="email" id="email" placeholder='ali.route@gmail.com'
                value={formik.values.email}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon icon={faEnvelope} className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500' />
                
                </div>
                {
                  formik.touched.email && formik.errors.email && <p className='text-sm text-red-500'>*{formik.errors.email }</p>
                }
                {
                  isErrorExist && <p className='text-sm text-red-500'>*{isErrorExist }</p>
                }
              </div>
 
             <div className="password gap-1 flex flex-col ">
                <div className='flex justify-between items-center'>
                  <label htmlFor="password" className='font-semibold text-sm'>Password</label>
                  <Link to='/forget-password' className='font-semibold  text-sm text-primary-500'>Forgot Password?</Link>
                </div>
                
                <div className='relative'>
                <input className="bg-transparent form-control w-full ps-8" type={showPassword ? `text` : 'password'} name="password" id="password" placeholder='Create a strong password'
                value={formik.values.password}
                onChange={handleChange}
                onBlur={formik.handleBlur}/>  
                <FontAwesomeIcon icon={faLock} className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 ' />
                <button onClick={togglePassword}>
                  {
                showPassword ? 
                <FontAwesomeIcon icon={faEyeSlash} className='absolute top-1/2 -translate-y-1/2 right-2 text-grey-500' /> 
                  :
                <FontAwesomeIcon icon={faEye}  className='absolute top-1/2 -translate-y-1/2 right-2  text-gray-500 '/>
                } 
                </button>
                 
                 </div>
                {
                  formik.touched.password && formik.errors.password && <p className='text-sm text-red-500'>*{formik.errors.password }</p>
                }
               </div>

      
               <div className='rememberMe flex flex-col  gap-2'>
                <div className='rememberMe flex items-center gap-2'>
                <input className="accent-primary-600 size-4" type="checkbox" name="rememberMe" id="rememberMe" 
                value={formik.values.rememberMe}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                />
                <label htmlFor='terms'>Keep me signed in</label>
                </div>
                {
                  formik.touched.terms && formik.errors.terms && <p className='text-sm text-red-500'>*{formik.errors.terms }</p>
                }
               </div>
                 
                 <button 
                 type='submit' className='btn shadow-lg flex items-center gap-2 justify-center bg-primary-600 hover:bg-primary-700 w-full text-white'>
                  Sign In
                 </button>
            </form>
 
              <div className='space-y-7'>
                  <p className='text-center  border-t border-gray-200/50 pt-7'>New to FreshCart? <Link className='text-primary-600 underline' to={'/signup'}> Create an account</Link></p>
                  <ul className='flex gap-5 text-gray-500 justify-center items-center'>
                    <li className='space-x-2 text-sm'>
                      <FontAwesomeIcon icon={faLock} />
                      <span>SSL secured</span>
                    </li>
                    <li className='space-x-2 text-sm'>
                      <FontAwesomeIcon icon={faUsers} />
                      <span>50K+ Users</span>
                    </li>
                    <li className='space-x-2 text-sm'>
                      <FontAwesomeIcon icon={faStar} />
                      <span>4.9 Rating</span>
                    </li>
                  </ul>
              </div>
          
          </div>
        </div>
      </main>
    </>
  
}


