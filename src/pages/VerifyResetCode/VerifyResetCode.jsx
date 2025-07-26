import { faEnvelope, faPaperPlane, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../../Context/Auth.Context';
import * as yup from 'yup'
import { useFormik } from 'formik';


export default function VerifyResetCode() {

const {handleResetCode , handleForgetPassword} = useContext(AuthContext)
const navigate = useNavigate()
let setTimeOitId = null

async function handleReset (values){
  const fullCode = Object.values(values).join('');
  
  await handleResetCode(fullCode)
  
  setTimeOitId = setTimeout(()=>{
  navigate('/reset-password')
  },3000) 
}
useEffect(()=>{
  return clearInterval(setTimeOitId)
},[])
const schema = yup.object({
  code1: yup.string().matches(/^\d$/, 'Must be a single digit').required("This Field is required"),
  code2: yup.string().matches(/^\d$/, 'Must be a single digit').required("This Field is required"),
  code3: yup.string().matches(/^\d$/, 'Must be a single digit').required("This Field is required"),
  code4: yup.string().matches(/^\d$/, 'Must be a single digit').required("This Field is required"),
  code5: yup.string().matches(/^\d$/, 'Must be a single digit').required("This Field is required"),
  code6: yup.string().matches(/^\d$/, 'Must be a single digit').required("This Field is required"),

})

const formik = useFormik({
  initialValues:{
    code1:'',
    code2:'',
    code3:'',
    code4:'',
    code5:'',
    code6:'',

  },
  onSubmit:handleReset,
  validationSchema:schema
})

const location = useLocation();
const {email} = location.state || {};

  const [timeLeft, setTimeLeft] = useState(600); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;


  return<>

  <section className='bg-gray-50'>
      <div className="container">
        <div className='py-15 space-y-5 flex flex-col items-center justify-center '>
          <div className='border border-gray-200 shadow rounded-lg bg-white md:w-1/2 lg:w-1/3 space-y-5 p-8 text-center  flex flex-col items-center justify-center'>
            <div className='size-20 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center'>
              <FontAwesomeIcon icon={faShieldHalved}  className='text-3xl'/>
            </div>
            <h2 className='text-2xl text-gray-900 font-bold '>Verify Reset Code</h2>
            <p className='text-gray-500 text-sm'>We've sent a verifcation code to your email address </p>
             <span className='text-sm text-primary-600 font-semibold'>{email}</span>
            <form className='flex flex-col gap-5 w-full ' onSubmit={formik.handleSubmit}>
             <div className='gap-3 flex flex-col'>
            <label className='font-semibold text-sm'>Enter 6 digits verifcation code</label>
             <div className='flex *:size-12 gap-2 justify-center *:rounded-lg *:px-4'>
              <input type="tel" name='code1' value={formik.values.code1} onChange={formik.handleChange} onBlur={formik.handleBlur} maxLength={1} className='border border-gray-200 ' />
              <input value={formik.values.code2} onChange={formik.handleChange} onBlur={formik.handleBlur} name='code2' type="tel" className='border border-gray-200 'maxLength={1}/>
              <input value={formik.values.code3} onChange={formik.handleChange} onBlur={formik.handleBlur} name='code3' type="tel" className='border border-gray-200 ' maxLength={1}/>
              <input value={formik.values.code4}onChange={formik.handleChange}onBlur={formik.handleBlur}name='code4' type="tel" className='border border-gray-200 '  maxLength={1}/>
              <input value={formik.values.code5}onChange={formik.handleChange}onBlur={formik.handleBlur}name='code5' type="tel" className='border border-gray-200 '  maxLength={1}/>
              <input value={formik.values.code6}onChange={formik.handleChange}onBlur={formik.handleBlur}name='code6' type="tel" className='border border-gray-200 '  maxLength={1}/>
             </div>
             {
              !formik.isValid && formik.touched.code1 && formik.touched.code2 && formik.touched.code3 && formik.touched.code4 && formik.touched.code5 && formik.touched.code6 &&
              <p className='text-sm text-red-600'>*All fields are required & must contain numbers only</p> 
             }
             </div>
            <p className='text-gray-600'>Code expires in <span className='text-primary-600'>
                      {minutes.toString().length === 1 ? '0'+minutes : minutes} : {seconds.toString().length === 1 ? '0'+seconds : seconds}
              </span></p>
             <button type='submit' className={`btn text-white ${formik.isValid && formik.dirty ? 'bg-primary-600' : 'bg-gray-300'}`}>Verify Code</button>
             </form>
             <div className='space-y-2'>
             <p>Don't receive the code?</p>
             <button className='text-primary-600 font-semibold'
             onClick={()=>{
              handleForgetPassword(email)
             }}
             >Resend Code</button>
             </div>
             <Link className='text-primary-600 text-sm' to={'/login'}>Back to sgin in</Link>
          </div>      
        </div>
      </div>

    </section>
  </>
}
