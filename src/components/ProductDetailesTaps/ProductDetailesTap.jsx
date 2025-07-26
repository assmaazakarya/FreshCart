import { faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import FirstTab from "../FirstTab/FirstTab";
import SecondTab from '../SecondTab/SecondTab'
import ThirdTab from "../ThirdTab/ThirdTab";


export default function ProductDetailesTap({ productDiscription }) {
  const [activeTab, setActiveTab] = useState('tab1');

  const Active = ' text-primary-600 border-b-2 border-primary-600 font-medium px-4 py-3 -mb-px';
  const Inactive = 'text-gray-600 px-4 py-3 -mb-px hover:text-primary-600';

   function showTab(tab){
    switch (tab){
      case 'tab1' :
      return <FirstTab productDiscription={productDiscription}/> 
      case 'tab2':
      return <SecondTab />
      case 'tab3' :
      return <ThirdTab/>  
    }
   }


return <>

    <section className=" p-15">
      <div className="container bg-white p-0 rounded-lg shadow-md">
        <div className="flex border-b border-gray-300 w-full ">
          <button
            onClick={() => setActiveTab('tab1')}
            className={activeTab === 'tab1' ? Active : Inactive}>Product Details</button>

          <button
            onClick={() => setActiveTab('tab2')}
            className={activeTab === 'tab2' ? Active : Inactive}>Reviews (149)</button>
          <button
            onClick={() => setActiveTab('tab3')}
            className={activeTab === 'tab3' ? Active : Inactive}>Shipping & Returns</button>
        </div>
        <div className="p-4">
          {  showTab(activeTab)}
        </div>
      </div>
    </section>


  </>
}
