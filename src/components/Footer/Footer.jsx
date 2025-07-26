import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/freshcart-logo.svg'
import cart from '../../assets/mini-logo.png'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className='p-5 border-t border-gray-200 bg-white text-gray-800'>
       <div className='container'>
       
       
        <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-5 p-4'>
        <div className='lg:col-span-2 space-y-3 '>
          <img src={Logo} alt="" />
          <p className='text-sm'>
            FreshCart is a versatile e-commerce platform offering a wide range 
            of products, from clothing to electronics. It provides a 
            user-friendly experience for seamless shopping across diverse
            categories
          </p>
          <ul className='flex gap-3 items-center text-lg *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-100'>
            <li>
              <a href="https://facebook.com" target='_blank'>
               <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>

             <li>
              <a href="https://x.com" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
             <li>
              <a href="https://instagram.com"target='_blank'>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
             <li>
              <a href="https://pinterest.com"target='_blank'>
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </li>
          </ul>
        </div>

        <div>
           <h2 className='text-md mb-4 font-bold'>Categories</h2>
          <ul className='space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200'>
            <li>
              <Link to={'/category/men'}>Men's Fashion</Link>
            </li>
             <li>
              <Link to={'/category/women'}>Women's Fashion</Link>
            </li>
             <li>
              <Link to={'/category/baby-toys'}>Baby & Toys</Link>
            </li>
             <li>
              <Link to={'/category/beauty-health'}>Beauty & Health</Link>
            </li>
             <li>
              <Link to={'/category/electronics'}>Electronics</Link>
            </li>
          </ul>
        </div>
        <div>
           <h2 className='text-md mb-4 font-bold'>Quick Links</h2>
          <ul className='space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200'>
            <li>
              <Link to={'/about'}>About Us</Link>
            </li>
             <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
             <li>
              <Link to={'privacy-policy'}>Privacy Policy</Link>
            </li>
             <li>
              <Link to={'terms-of-service'}>Terms Of Service</Link>
            </li>
             <li>
              <Link to={'shipping-ploicy'}>Shipping Policy</Link>
            </li>
          </ul>
        </div>
       <div>
           <h2 className='text-md mb-4 font-bold'>Customer Service</h2>
          <ul className='space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200'>
            <li>
              <Link to={'/account'}>My Account</Link>
            </li>
             <li>
              <Link to={'/order'}>My Orders</Link>
            </li>
             <li>
              <Link to={'/wishlist'}>Wishlist</Link>
            </li>
             <li>
              <Link to={'returns-refounds'}>Returns & Refounds</Link>
            </li>
             <li>
              <Link to={'/help-center'}>Help Center</Link>
            </li>
          </ul>
        </div>
       </div>



       <div className='flex items-center justify-between py-3 border-t border-gray-200'>
        <p>© {new Date().getFullYear()} FreshCart. All rights reserved. </p>
        <img src={cart} alt="" className='w-8'/>
       
       </div>
       
       
       
       </div>
    </footer>
  )
}
