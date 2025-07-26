import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Subscribe() {
 

function handleSubscribe(value){
    console.log(value);  
}

 const schema = yup.object({
   email: yup.string().required("Email is required").email("Email is invalid"),
 })
 
 
 const formik = useFormik({
   initialValues:{
     email:'',
   },
   onSubmit:handleSubscribe,
   validationSchema:schema
 })
 
 
 return <>
     <section className='bg-primary-50 py-15'>
        <div className="container flex flex-col space-y-4 items-center justify-center">
            <h3 className='text-2xl font-semibold'>Subscribe to our Newsletter</h3>
            <p className='text-gray-600 text-center md:text-start'>Stay updated with our latest offers,recipes, and health tips</p>
            <form className='md:w-3/6 w-11/12 flex items-center justify-center flex-col gap-5 md:flex-row md:gap-0 ' onSubmit={formik.handleSubmit}>
                <input 
                type="email" 
                className='w-full form-control md:w-9/12 bg-white md:rounded-tr-none md:rounded-br-none' 
                name="email" 
                id="email" 
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Your Email Address'/>
                <button type='submit' className='btn md:text-sm lg:text-base  hover:bg-primary-500 hover:border-primary-500 bg-primary-600 border border-primary-600 text-white md:rounded-tl-none md:rounded-bl-none w-full md:w-3/12'>Subscribe</button> 
              </form>
               {
                    formik.touched.email && formik.errors.email && <p className='text-red-500 text-sm -mt-3' >* Invalid Email Address</p>
                }
        </div>
     </section>
  </>
}
