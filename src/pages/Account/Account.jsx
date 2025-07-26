import { faBoxOpen, faCreditCard, faHeart, faRightFromBracket, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../../Context/Auth.Context";
import { useContext } from "react";


export default function Account() {
  
 const { logOut } = useContext(AuthContext);


return<>  

  <section className="bg-gray-50 py-10">

<div className="container grid lg:grid-cols-12 gap-10">
   <div className="col-span-4 bg-white p-6 h-fit shadow-sm rounded-lg space-y-4">
     <div className="flex items-center gap-5">
      <div className="size-15 text-xl rounded-full flex items-center justify-center text-primary-600 bg-primary-100">
        <FontAwesomeIcon icon={faUser}/>
      </div>
      <div>
        <h2 className="font-semibold">John Doe</h2>
        <span className="text-gray-500 text-sm">johndoe@gmail.com</span>
      </div>
     </div>
     <aside>
      <ul className="space-y-2 *:rounded-lg text-gray-600 *:hover:bg-primary-100/50 *:hover:text-primary-600 transition-colors duration-200">
        <li className="*:space-x-3 *:py-4 *:ps-4 ">
          <NavLink to={'orders'} className={({isActive})=>{
          return ` ${isActive ? 'bg-primary-100/50 text-primary-600' :''} flex items-center rounded-lg`}}>
          <FontAwesomeIcon  className="text-lg"  icon={faBoxOpen}/>
          <span>Orders</span>
          </NavLink>
        </li>
        <li className="*:space-x-3 *:py-4 *:ps-4">
          <NavLink to={'/wishlist'}  className="flex items-center">
          <FontAwesomeIcon  className="text-lg"  icon={faHeart}/>
          <span>Wishlist</span>
          </NavLink>
        </li>
        <li className="*:space-x-3 *:py-4 *:ps-4">
          <NavLink to={'/checkout'}  className="flex items-center">
          <FontAwesomeIcon  className="text-lg"  icon={faCreditCard}/>
          <span>Payment Method</span>
          </NavLink>
        </li>
              <li className="*:space-x-3 *:py-4 *:ps-4">
          <NavLink to={'account-details'} className={({isActive})=>{
          return ` ${isActive ? 'bg-primary-100/50 text-primary-600' :''} flex items-center rounded-lg`}}>
          <FontAwesomeIcon  className="text-lg"  icon={faUserPen}/>
          <span>Account Details</span>
          </NavLink>
        </li>
        <li onClick={logOut} className="space-x-3 flex items-center *:py-4 cursor-pointer">
          <FontAwesomeIcon  className="text-lg ps-4" icon={faRightFromBracket}/>
          <span>LogOut </span>
        </li>
      </ul>
     </aside>
   </div>
   <div className="col-span-8 p-6 bg-white shadow-sm rounded-lg h-fit">
    <Outlet/>
   </div>
</div>

  </section>

  </>
}
