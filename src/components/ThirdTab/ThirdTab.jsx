import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf ,faSeedling } from '@fortawesome/free-solid-svg-icons' 

export default function ThirdTab() {
  return   <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold" >Product Description</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sunt nisi necessitatibus. Beatae ipsam blanditiis repudiandae, quam sapiente esse reprehenderit. Eius a eveniet delectus doloremque vel temporibus corrupti quibusdam? Magnam consectetur atque quaerat dolorem inventore!
                </p>
                </div>
               <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-5">
                <div className="space-y-2">
                  <h5 className="font-semibold">Benefits</h5>
                  <ul className="list-disc ps-5 text-gray-600">
                    <li>Rich in Vitamins C and K.</li>
                    <li>Good source in fiber and antioxidants</li>
                    <li>Suppots Heart health</li>
                    <li>Helps regulate blood suger</li>
                    <li>Promotes healthy skin</li>
                  </ul>
                </div>
                <div className="space-y-2" >
                  <h5  className="font-semibold">Product Detailes</h5>
                  <ul>
                    <li>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Origin:</span>
                          <span className="text-gray-700">California, USA</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Cultivation:</span>
                          <span className="text-gray-700">Organic</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Storage:</span>
                          <span className="text-gray-700">Refrigerated upon arrival</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 font-medium text-gray-700">Shelf Life:</span>
                          <span className="text-gray-700">5-7 days when refrigerated</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold" >How to Store</h4>
                <p className="text-gray-600 text-sm" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero velit quae consequuntur enim delectus! Nemo neque debitis, cum a ad nam asperiores aspernatur voluptatum iusto.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold" >Certifications</h4>
                <div className="space-x-2">
                  <button className="btn bg-transparent border border-gray-200 hover:bg-gray-100 space-x-2">
                    <FontAwesomeIcon className="text-primary-600 " icon={faLeaf}/>
                    <span>USDA organic</span>
                  </button>
                  <button className="btn bg-transparent border border-gray-200 space-x-2  hover:bg-gray-100" >
                    <FontAwesomeIcon className="text-primary-600 " icon={faSeedling}/>
                    <span>Non-GMO</span>
                  </button>
                </div>
              </div>
            </div>
}
