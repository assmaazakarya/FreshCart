import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet, ScrollRestoration } from 'react-router'

export default function Layout() {
  return (
<>
<Navbar />
<ScrollRestoration />
<Outlet></Outlet>
<Footer/>
</>
  )
}
