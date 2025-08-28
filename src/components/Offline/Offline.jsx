import { faArrowsRotate, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Offline() {

const now = new Date();

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');


return <>
      <section className='w-screen h-screen bg-gray-100 pt-20' >
        <div className='container  flex flex-col gap-10 items-center justify-center'>
          <div className='text-red-600 relative after:absolute after:bg-red-600 after:w-15 after:h-1.5 after:rounded-full after:bottom-1/2 after:rotate-55 after:-translate-x-full' >
          <FontAwesomeIcon className='text-5xl drop-shadow-2xl drop-shadow-red-600' icon={faWifi}/>
        </div>
        <div className='bg-white p-8 rounded-md shadow lg:w-1/3 text-center space-y-4'>
           <h2 className='text-3xl'>Connection Lost</h2>
           <p>Oops! It looks like you have lost your internet connection.Don't worry we will help you get back online</p>
           <div className='bg-gray-200 p-4 rounded-md space-y-5'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" /></svg>
               <span>Network Status:</span> 
              </div>
               <span className='text-red-500'>Offline</span>
            </div>
 <div className='flex justify-between items-center'>
              <div className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" /></svg>
                <span>Last Checked:</span> 
              </div>
               <span>{`${hours}:${minutes}:${seconds}`}</span>
            </div>
           </div>
           <button className='w-full btn bg-primary-600 text-white hover:bg-primary-500 space-x-2'>
            <FontAwesomeIcon icon={faArrowsRotate} />
            <span>Try Again</span>
            </button>
        </div>
        </div>
      </section>
  </>
}
