import { faShieldHalved, faTruckFast ,faStar, faUserPlus  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import review from '../../assets/review-author.png'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { useState } from 'react'
import { sendDataToSignup } from '../../services/authService/authService'
import { checkPasswordStrength } from '../../utlis/passwordStrength'



export default function Signup() {

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/
const phoneRegex = /^01[0125][0-9]{8}$/

const navigate = useNavigate()
const [isErrorExist,setIsErrorExist] = useState(null)



async function handleSginup(values){
    try {
  const response = await sendDataToSignup(values)
  if(response.success){
    toast.success("You created an account successfully")
    setTimeout(()=>{
    navigate('/login')
    },3000)
  }
    } catch (error) {
      setIsErrorExist(error.message)
    }
  
}


const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required").min(8, 'Password must be at least 8 characters').matches(passwordRegex ,"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."),
  rePassword : yup.string().required("Confirm your password please").oneOf([yup.ref('password')],'Passwords must be the same').min(8, 'Password must be at least 8 characters'),
  phone:yup.string().required("Phone Number is requires").matches(phoneRegex,"Please enter a valid phone number"),
  terms:yup.boolean().oneOf([true],"You must agree to our terms and conditions.")
})


const formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:'',
    terms:false
  },
  onSubmit:handleSginup,
  validationSchema:schema
})

const passwordStrength = checkPasswordStrength(formik.values.password)



  return <>

      <main className='py-12 bg-gray-50 border-t border-gray-200 lg:border-0'>
        <div className="container grid lg:grid-cols-2 lg:gap-12">
          {/* left side */}
          <div className='left space-y-8 py-10'>
          
            <div>
              <h2 className='text-4xl font-bold'>Welcome to  <span className='text-primary-600'>FreshCart</span>
            </h2>
            <p className='text-md mt-2'>Join thousands of happy customers who enjoy fresh groceries 
              delivered right to their doorstep
            </p>
            
            </div>
          
            <ul className=' space-y-4  *:flex *:items-center *:gap-4'>
              <li>
                <div className='size-10 *:text-lg bg-primary-200 rounded-full text-primary-500 flex items-center justify-center '>
                <FontAwesomeIcon icon={faStar} />
                </div>
                <div>
                  <h3 className='font-semibold'>Premium Quality</h3>
                  <p className='text-gray-600'>Premuim quality products sourced from trusted suppliers</p>
                </div>
              </li>
             <li>
              <div className='size-10 *:text-lg bg-primary-200 rounded-full text-primary-500 flex items-center justify-center '>
                <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div>
                  <h3 className='font-semibold'>Fast Delivey</h3>
                  <p className='text-gray-600'>Same-day delivery available in most areas</p>
                </div>
              </li>
                <li>
              <div className='size-10 *:text-lg bg-primary-200 rounded-full text-primary-500 flex items-center justify-center '>
                <FontAwesomeIcon  icon={faShieldHalved} />
                </div>
                <div>
                  <h3 className='font-semibold'>Secure Shopping</h3>
                  <p className='text-gray-600'>Your data and payments are completely secure</p>
                </div>
              </li>

            </ul>

          <div className='review p-6 rounded-lg shadow-md space-y-3 bg-white'>
            <div className=" flex items-center gap-3">
              <img src={review} className='size-12 rounded-full' alt="Sarah Johnson's review" />
              <div>
                <h3>Sarah Johnson</h3>
                <span className='text-amber-300'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />  
                </span>
              </div>
            </div>
            <blockquote className='italic'>
              <q className='text-sm'>FreshCart has transformed my shopping experience. 
                The quality of the products is outstanding, 
                and the delivery is always on time, Highly recommend!</q>
            </blockquote>
          
          </div>
          </div>
          {/* right side => form*/}
          <div className='right px-8 py-10 rounded-xl shadow-xl bg-white space-y-8'>
            <div className='text-center space-y-1'>
              <h2 className='text-3xl font-semibold'>Create Your Account</h2>
            <p>Start your fresh journey with us today</p>
            </div>
            <div className='grid grid-cols-2 gap-3 *:inline-flex *:items-center *:gap-2 *:justify-center'>
              <button className='btn border border-gray-300/70 bg-transparent hover:bg-gray-100/50 transition-colors duration-150'>
                <FontAwesomeIcon icon={faGoogle} className='text-red-600' />
                <span>Google</span>
              </button>
              <button className='btn border border-gray-300/70 bg-transparent  hover:bg-gray-100/50 transition-colors duration-150'>
                <FontAwesomeIcon icon={faFacebook} className='text-blue-600' />
                <span>Facebook</span>
              </button>
            </div>
            <div className='w-full h-0.5 bg-gray-300/50 relative'>
              <span className='absolute left-1/2 top-1/2 -translate-1/2 bg-white size-10 flex justify-center items-center'>or</span>
            </div>
            <form className='space-y-5' onSubmit={formik.handleSubmit} > 
              
              <div className="name gap-1 flex flex-col">
                <label htmlFor="name">Name*</label>
                <input 
                className="form-control" 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Ali'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {
                  formik.touched.name && formik.errors.name && <p className='text-sm text-red-500'>*{formik.errors.name }</p>
                }
              </div>

             <div className="email gap-1 flex flex-col">
                <label htmlFor="email">Email*</label>
                <input className="form-control" type="email" name="email" id="email" placeholder='ali.route@gmail.com'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {
                  formik.touched.email && formik.errors.email && <p className='text-sm text-red-500'>*{formik.errors.email }</p>
                }
                {
                  isErrorExist && <p className='text-sm text-red-500'>*{isErrorExist }</p>
                }
              </div>
 
             <div className="password gap-1 flex flex-col">
                <label htmlFor="password">Password*</label>
                <input className="form-control" type="password" name="password" id="password" placeholder='Create a strong password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
              {
                formik.values.password && (
                  <div className="password-strength flex items-center gap-2">
                <div className="bar w-full bg-gray-300 rounded-full overflow-hidden h-1">
                  <div className={`progress ${passwordStrength.width} ${passwordStrength.bg} h-full`} ></div>
                </div>
                <span fixedWidth className='w-30 text-center'>{passwordStrength.text}</span>
              </div>
                )
              }
              {
                  formik.touched.password && formik.errors.password && <p className='text-sm text-red-500'>*{formik.errors.password }</p>
                }
             </div>

              <div className="rePassword gap-1 flex flex-col">
                <label htmlFor="rePassword">Confirm Password*</label>
                <input className="form-control" type="password" name="rePassword" id="rePassword" placeholder='confirm password' 
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {
                  formik.touched.rePassword && formik.errors.rePassword && <p className='text-sm text-red-500'>*{formik.errors.rePassword }</p>
                }
              </div>

               <div className="phone gap-1 flex flex-col">
                <label htmlFor="phone">Phone Number*</label>
                <input className="form-control" type="tel" name="phone" id="phone" placeholder='+2 010 9751 4862' 
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {
                  formik.touched.phone && formik.errors.phone && <p className='text-sm text-red-500'>*{formik.errors.phone }</p>
                }
              </div>
      
               <div className='terms flex flex-col  gap-2'>
                <div className='terms flex items-center gap-2'>
                  <input className="accent-primary-600 size-4" type="checkbox" name="terms" id="terms" 
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label htmlFor='terms'> I agree to the  <Link className='text-primary-600 underline' to={'terms-of-service'}>Terms of Service</Link> and  <Link className='text-primary-600 underline' to={'privacy-policy'}>Privacy Policy</Link>
                </label>
                </div>
                {
                  formik.touched.terms && formik.errors.terms && <p className='text-sm text-red-500'>*{formik.errors.terms }</p>
                }
               </div>
                 
                 <button 
                 type='submit' className='btn shadow-lg flex items-center gap-2 justify-center bg-primary-600 hover:bg-primary-700 w-full text-white'>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Create My Account</span>
                 </button>
            </form>

            <p className='text-center  border-t border-gray-200 pt-5'>Already have an account? <Link className='text-primary-600 underline' to={'/login'}>Signin</Link></p>
          </div>
        </div>
      </main>
    </>
  
}
