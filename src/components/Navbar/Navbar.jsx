import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import {
  faAngleDown,
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faEllipsis,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/freshcart-logo.svg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth.Context';
import { CartContext } from '../../Context/Cart.Context';
import { categoriesContext } from '../../Context/AllCategories.Context';

export default function Navbar() {
  const { logOut, token } = useContext(AuthContext);
  const { cartInfo, isLoading } = useContext(CartContext);

  const { categories } = useContext(categoriesContext);
  let category = [];
  if (!isLoading) {
    category = categories?.filter(categ => {
      if (
        categ?.slug === "men's-fashion" ||
        categ?.slug === "women's-fashion" ||
        categ?.slug === 'baby-and-toys' ||
        categ?.slug === 'beauty-and-health' ||
        categ?.slug === 'electronics'
      )
        return categ;
    });
  }

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <>
      <header className="text-gray-800">
        <div className="container">
          {/*  Top Navbar */}
          <div className="hidden text-sm lg:flex justify-between items-center *:flex *:gap-5 *:items-center border-b border-gray-300/30 py-2">
            <ul className="*:flex *:items-center *:gap-2">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/orders">Track Order</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>SPR</option>
                  <option>AED</option>
                </select>
              </li>
              <li>
                <select>
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
          {/* main Navbar */}
          <nav className="flex justify-between items-center py-6">
            <h1>
              <Link to={'/'}>
                <img src={Logo} alt="fresh cart logo" />
              </Link>
            </h1>
            <ul className="hidden lg:flex gap-8 *:hover:text-primary-500 *:transition-colors *:duration-200">
              <li>
                <NavLink
                  to={'/wishlist'}
                  className={({ isActive }) => {
                    return ` ${isActive ? 'text-primary-600' : ''}
                flex flex-col gap-2`;
                  }}
                >
                  <FontAwesomeIcon className="text-xl" icon={faHeart} />
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={'/cart'}
                  className={({ isActive }) => {
                    return ` ${isActive ? 'text-primary-600 ' : ''}
                flex flex-col gap-1`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      className="text-xl"
                      icon={faCartShopping}
                    />
                    {
                     token && 
                      <span className="text-xs absolute size-4 bg-primary-500 text-white top-0 right-0 -translate-y-1/2 rounded-full flex items-center justify-center">
                      {!isLoading ? (
                        cartInfo?.numOfCartItems
                      ) : (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      )}
                    </span>

                    }
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>

              {token === null ? '' :<>
              <li>
                <NavLink
                  to={'/account'}
                  className={({ isActive }) => {
                    return ` ${isActive ? 'text-primary-600 ' : ''}
                flex flex-col gap-2`;
                  }}
                >
                  <FontAwesomeIcon className="text-xl" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li>
              </>
              }
              {token === null ? (
                <>
                  <li>
                    <NavLink
                      to={'/signup'}
                      className={({ isActive }) => {
                        return ` ${isActive ? 'text-primary-600 ' : ''}
                flex flex-col gap-2`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
                      <span className="text-sm">Signup</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={'/login'}
                      className={({ isActive }) => {
                        return ` ${isActive ? 'text-primary-600 ' : ''}
                flex flex-col gap-2`;
                      }}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={faAddressCard}
                      />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li
                  className="flex flex-col gap-2 cursor-pointer"
                  onClick={logOut}
                >
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faRightFromBracket}
                  />
                  <span className="text-sm">Logout</span>
                </li>
              )}
            </ul>

            <button
              onClick={toggleMenu}
              className="btn bg-primary-700 text-white lg:hidden"
            >
              {isMenuOpened ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>
        {/* category Navbar */}
        <nav className="category hidden lg:block bg-gray-100 py-4">
          <div className="container flex gap-8 items-center">
            <div className="relative group">
              <button className=" btn flex items-center gap-3 text-white bg-primary-600 hover:bg-primary-700">
                <FontAwesomeIcon icon={faBars} />
                All Categories
                <FontAwesomeIcon icon={faAngleDown} />
              </button>

              <menu className="*:p-3 z-40 group-hover:block hidden absolute top-10 min-w-55 *:hover:bg-gray-100/90 bg-white shadow  divide-y-2 divide-gray-300/30 rounded-lg">
                <li>
                  <Link
                    to={`categories/${category[0]?._id}`}
                    className=" flex items-center gap-2"
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl"
                      fixedWidth
                      icon={faPerson}
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categories/${category[1]?._id}`}
                    className=" flex items-center gap-2"
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl"
                      fixedWidth
                      icon={faPersonDress}
                    />
                    <span>Women's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categories/${category[2]?._id}`}
                    className=" flex items-center gap-2"
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl"
                      fixedWidth
                      icon={faBabyCarriage}
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categories/${category[3]?._id}`}
                    className=" flex items-center gap-2"
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl"
                      fixedWidth
                      icon={faSuitcaseMedical}
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/categories/${category[4]?._id}`}
                    className=" flex items-center gap-2"
                  >
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl"
                      fixedWidth
                      icon={faBolt}
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/categories`} className=" flex items-center gap-2">
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl"
                      fixedWidth
                      icon={faEllipsis}
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>

            <ul className="flex gap-5">
              <li>
                <NavLink
                  to={'/'}
                  className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ''}`;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/recently-added'}
                  className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ''}`;
                  }}
                >
                  Recently Added
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/featured-products'}
                  className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ''}`;
                  }}
                >
                  Featured Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/offers'}
                  className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ''}`;
                  }}
                >
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/brands'}
                  className={({ isActive }) => {
                    return `${isActive ? 'text-primary-600' : ''}`;
                  }}
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* offcanvas */}

        {isMenuOpened && (
          <>
            <div
              onClick={toggleMenu}
              className="layer fixed inset-0 bg-black/50 z-30"
            ></div>
            <div className="offcanvas animate-slide fixed top-0 bottom-0 z-40 bg-white p-5 space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <img src={Logo} alt="Fresh Cart Logo" />
                <button
                  onClick={toggleMenu}
                  className="btn rounded-full flex items-center justify-center size-10"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-lg" />
                </button>
              </div>

              {/* <search className="relative">
                <input
                  type="text"
                  className="form-control min-w-64"
                  placeholder="Search for product"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-2 top-1/2 -translate-1/2"
                />
              </search> */}

              <div className="pb-4 border-b border-gray-200">
                <h2 className="text-lg font-bold">Main Menu</h2>
                <ul className=" space-y-2 *:hover:bg-gray-100 transition-colors duration-200">
                  <li className="mt-3">
                    <NavLink
                      to={'/wishlist'}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? 'text-primary-600 bg-primary-100' : ''
                        }
                flex gap-2 py-3 px-1`;
                      }}
                    >
                      <FontAwesomeIcon
                        fixedWidth
                        className="text-xl"
                        icon={faHeart}
                      />
                      <span className="text-sm">Wishlist</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={'/cart'}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? 'text-primary-600 bg-primary-100' : ''
                        }
                flex gap-2 py-3 px-1`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-xl"
                          icon={faCartShopping}
                        />
                        {
                          token && <span className="text-xs absolute size-4 bg-primary-600 text-white top-0 right-0 -translate-y-2/3 rounded-full flex items-center justify-center">
                          {!isLoading ? (
                            cartInfo.numOfCartItems
                          ) : (
                            <FontAwesomeIcon icon={faSpinner} spin />
                          )}
                        </span>
                        }
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>

                 {
                  token === null ? '':<>
                   <li>
                    <NavLink
                      to={'/account'}
                      className={({ isActive }) => {
                        return ` ${
                          isActive ? 'text-primary-600 bg-primary-100' : ''
                        }
                flex  gap-2 py-3 px-1`;
                      }}
                    >
                      <FontAwesomeIcon
                        fixedWidth
                        className="text-xl"
                        icon={faUser}
                      />
                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                  </>
                 }
                </ul>
              </div>

              <div className='space-y-3'>
                <h2 className="text-lg font-bold">Account</h2>
                <ul className=" space-y-3 *:hover:bg-gray-100 transition-colors duration-200">
                  {token === null ? (
                    <>
                      <li>
                        <NavLink to={'/signup'} className={({ isActive }) => { return ` ${isActive ? 'text-primary-600 ' : ''} flex items-center gap-3 py-3 px-1`;}}>
                          <FontAwesomeIcon className="text-xl" icon={faUserPlus}/>
                          <span className="text-sm">Signup</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink to={'/login'} className={({ isActive }) => { return ` ${isActive ? 'text-primary-600 ' : ''} flex items-center gap-3 py-3 px-1`; }}>
                          <FontAwesomeIcon className="text-xl" icon={faAddressCard}/>
                          <span className="text-sm">Login</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li
                      className="flex flex-col gap-2 cursor-pointer"
                      onClick={logOut}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={faRightFromBracket}
                      />
                      <span className="text-sm">Logout</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
