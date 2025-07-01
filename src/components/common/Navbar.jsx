import React, { useEffect, useState } from 'react';
import { NavbarLinks } from '../../data/navbar-links';
import Logo from '../../assets/Logo/Logo-Full-Light.png';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { FaCartShopping } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import ProfileContainer from "../core/Auth/ProfileContainer"
import { apiConnector } from '../../services/apiConnectorRoute';
import { categories } from '../../services/apis';

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [activeLink, setActiveLink] = useState(NavbarLinks[0]);
  const [subLinks, setSubLinks] = useState([]);

  async function subLinkFetch() {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("✅ SubLinks Fetched: ", result.data.data);
      setSubLinks(result.data.data);
    } catch (err) {
      console.log("❌ Error fetching catalog links:", err);
    }
  }

  useEffect(() => {
    subLinkFetch();
  }, []);

  const clickHandler = (title) => {
    setActiveLink(title);
  };

  return (
    <div className="flex h-[80px] items-center justify-center border-b-2 border-b-richblack-700">
      <nav className="w-11/12 max-w-maxContent flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" height={42} width={160} />
        </Link>

        {/* Navbar Links */}
        <ul className="flex gap-x-6 text-richblack-5">
          {NavbarLinks.map((item, index) => (
            <li key={index}>
             {item.title === 'Catalog' ? (
  <div className="relative group cursor-pointer">
    {/* Catalog Text + Icon */}
    <div className="flex items-center gap-1">
      <p className="text-white">Catalog</p>
      <FaChevronDown className="text-sm text-white mt-1" />
    </div>

    {/* Dropdown Menu */}
    <div className="invisible opacity-0 absolute left-1/2 top-[110%] translate-x-[-50%] flex flex-col rounded-md bg-white text-black shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 w-[220px] z-50 border border-gray-300">
      
      {/* Diamond Pointer */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-300 z-50"></div>

      {/* Dropdown Items */}
      {subLinks.length === 0 ? (
        <p className="p-4 text-sm text-gray-500">Loading...</p>
      ) : (
        subLinks.map((subLink) => (
          <Link
            key={subLink._id}
            to={`/catalog/${subLink.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="px-4 py-2 text-sm text-black hover:bg-gray-100 transition-all duration-150"
          >
            {subLink.name}
          </Link>
        ))
      )}
    </div>
  </div>
) : (
                <Link
                  to={item?.path}
                  className={`${activeLink === item.title ? 'text-yellow-25' : 'text-white'}`}
                  onClick={() => clickHandler(item.title)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section - Cart / Auth / Profile */}
        <div className='flex flex-row gap-x-4 items-center'>
          {user && user.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"} className='relative text-white'>
              <FaCartShopping />
              {totalItems > 0 && (
                <span className='absolute -top-2 -right-2 bg-yellow-25 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {!token && (
            <>
              <Link to={"/login"}>
                <button className='border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-200 rounded'>
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className='border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-200 rounded'>
                  Signup
                </button>
              </Link>
            </>
          )}

          {token && <ProfileContainer />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
