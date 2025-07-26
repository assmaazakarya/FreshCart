import {  faArrowRight, faEnvelopeOpenText, faHeadset, faLock, faPaperPlane, faQuestion, faQuestionCircle, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../Context/Auth.Context'
import { useFormik } from 'formik'
import * as yup from 'yup'


export default function Forgetpassword() {
 
 const {handleForgetPassword} = useContext(AuthContext)
 const navigate = useNavigate()
 
const schema = yup.object({
  email: yup.string().required("Email is required").email("Email is invalid"),
})

const formik = useFormik({
  initialValues:{
    email:'',
  },
  onSubmit:handleForget,
  validationSchema:schema
})
const setTimeOitId = null

async function handleForget(values){
  await handleForgetPassword(values.email)
  setTimeOitId = setTimeout(()=>{
  navigate('/verify-reset-code',{ state: {email : values.email }})
  },3000) 
}

useEffect(()=>{
  return clearTimeout(setTimeOitId)
},[])

return <>
 
    <section className='bg-gray-50'>
      <div className="container">
        <div className='py-15 space-y-5 flex flex-col items-center justify-center '>
          <div className='border border-gray-200 shadow rounded-lg bg-white md:w-1/2 lg:w-1/3 space-y-4 p-8 text-center  flex flex-col items-center justify-center'>
            <div className='size-15 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faLock}  className='text-2xl'/>
            </div>
            <h2 className='text-xl font-bold '>Forget Your Password?</h2>
            <p className='text-gray-500 text-sm'>No worries! Enter your email address and we'll send you a link to reset your password</p>
            <form className='flex flex-col gap-5 w-full ' onSubmit={formik.handleSubmit}>
             <div className='flex items-start flex-col gap-2 relative '>
              <FontAwesomeIcon className='absolute right-2 top-1/2 mt-1.5 text-gray-400' icon={faEnvelope}/>
               <label htmlFor="email" className='font-semibold text-sm'>Email Address</label>
              <input 
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email" 
              className='form-control w-full border-gray-200 placeholder:text-gray-900 placeholder:text-sm' name="email" id="email"  placeholder='Your registered email address'/>
              {
                formik.errors.email && formik.touched.email && <p className='text-red-600 text-sm'>*{formik.errors.email} </p>
              }
             </div>
             <button type='submit' className='btn bg-primary-600 text-white space-x-2'>
                <FontAwesomeIcon icon={faPaperPlane} />
                <span className='text-sm'>Send Reset Link</span>
              </button>
            </form>
            <p className='text-gray-600'>Remember Your Password? <Link className='text-primary-600' to={'/login'}>Sign in </Link></p>
          </div>

          <div className="flex gap-3 border p-3 border-gray-300 rounded-lg md:w-1/2 lg:w-1/3" >
           <div className='pt-0.5'>
             <FontAwesomeIcon className="text-primary-600" icon={faShieldHalved} />
             
           </div>
           <div className='space-y-2'>
               <h4 className="font-semibold">Security Notice </h4>
              <p className="text-xs text-gray-500">For your security, a password reset link will be sent to your registered email address. The link will expire in 30 minutes.</p>
             
             </div>
          </div>

        </div>
      </div>
      <div className='bg-white border-t border-gray-200 py-10'>
        <div className="container text-center space-y-7">
          <h3 className='font-semibold'>Need additional help?</h3>
          <div className='*:border *:border-gray-300 *:rounded-md *:bg-gray-50 *:py-7 *:px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto'>
            <div className='flex flex-col items-center gap-3' >
              <div className='size-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full'>
                <FontAwesomeIcon className='text-lg' icon={faHeadset} />
              </div>
              <h2 className='font-semibold'>Contact Support</h2>
              <p className='text-sm text-gray-500'>Our customer support team is avaliable 24/7 to assist you </p>
              <Link className='text-primary-600 flex items-center gap-2'>
                <span>Contact Us</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

            <div className='flex flex-col items-center gap-3'>
              <div className='size-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full'>
                <FontAwesomeIcon className='text-lg' icon={faQuestionCircle} />
              </div>
              <h2 className='font-semibold' >FAQs</h2>
              <p className='text-sm text-gray-500'>Find answers to frequently asked questions about your account</p>
              <Link className='text-primary-600 flex items-center gap-2'>
                <span>View FAQs</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <div className='size-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full'>
                <FontAwesomeIcon  className='text-lg'  icon={faEnvelopeOpenText} />
              </div>
              <h2 className='font-semibold' >Email Not Received?</h2>
              <p className='text-sm text-gray-500'>Check out your spam or request a new reset link</p>
              <Link className='text-primary-600 flex items-center gap-2'>
                <span>Resend Email</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
}
