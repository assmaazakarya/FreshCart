import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet, ScrollRestoration } from 'react-router'
import { useOnline } from '../../hooks/useOnlineStatus'
import Offline from '../../components/Offline/Offline'

export default function Layout() {
  
const isOnline = useOnline()
if(!isOnline) return <Offline/>
return (
<>
<Navbar />
<ScrollRestoration />
<Outlet></Outlet>
<Footer/>
</>
  )
}
