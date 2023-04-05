import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../../App";

function Header() {
  //   const [curtain, setCurtain] = useState(false);
  const [chatNav, setChatNav] = useState(false);
  const [pageNav, setPageNav] = useState(false);

  //   useEffect(() => {
  //     if (chatNav || pageNav) {setCurtain(true)}
  //     else {setCurtain(false)}
  //   }, [chatNav, pageNav])

  return (
    <div>
      {/* <div
        curtain
        className={`absolute top-12 left-0 h-screen w-full bg-white transition-all duration-300 ${
          curtain ? "opacity-50" : "opacity-0"
        }`}
      ></div> */}
      <header className="to-none absolute z-20 flex h-12 w-full flex-row items-center justify-between bg-gradient-to-b from-sol-50 px-4" >
        <div left className="flex flex-row items-center gap-2">
          <div
            onClick={() => {
                setChatNav(!chatNav)
                setPageNav(false)
            }}
            className="title cursor-pointer text-3xl"
          >
            <ion-icon name="chatbubbles-outline"></ion-icon>
          </div>
          <div logo>
            <Link to="/myduck" className=" title text-xl" exact onClick={() => {
                setPageNav(false)
                setChatNav(false)
                }}>
              MyDuck
            </Link>
          </div>
        </div>
        <div
          right
          onClick={() => setPageNav(!pageNav)}
          className="title cursor-pointer text-3xl sm:hidden"
        >
          <ion-icon
            name={pageNav ? "close-outline" : "menu-outline"}
          ></ion-icon>
        </div>
      </header>

      <nav
        id="pageNav"
        className={`absolute top-0 z-10 h-screen w-full bg-white bg-opacity-90 transition-all duration-300 ${
          pageNav ? "right-0 opacity-100" : "-right-full opacity-0"
        }`}
        onClick={() => setPageNav(false)}
      >
        <ul
          className={`scrollbar flex h-full flex-col gap-2 overflow-auto pt-12 sm:flex-row `}
        >
          {PAGES.map((page) => (
            <li className=" to-none bg-gradient-to-l from-sol-50">
              <Link
                key={page.name}
                to={page.path}
                onClick={() => setPageNav(false)}
                exact
                className="title block h-full w-full py-2 px-6 text-right "
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
// <div>
//   <header className="fixed top-0 right-0 flex w-full flex-row items-center justify-between bg-gradient-to-b from-sol-50 to-white px-4 py-2">
//     <div
//       id="left"
//       className="title flex flex-row items-center gap-2  lowercase"
//     >
//       <div
//         onClick={() => setOpenChat(!openChat)}
//         className="title text-3xl"
//       >
//         <ion-icon name="chatbubbles-outline"></ion-icon>
//       </div>
//       {/* <ul>
//       <li>Chat 1</li>
//       <li>Chat 2</li>
//       <li>Chat 3</li>
//     </ul> */}

//       <div id="logo">
//         <Link
//           to="/myduck"
//           className="text-xl uppercase hover:text-sol-900 focus:ring-0"
//         >
//           MyDuck
//         </Link>
//       </div>
//     </div>
//     <nav>
//       <div
//         onClick={() => setOpenMenu(!openMenu)}
//         className="title cursor-pointer text-3xl sm:hidden"
//       >
//         <ion-icon name="menu-outline"></ion-icon>
//       </div>

//       <ul
//         className={`duration-500s absolute left-0 bottom-0 z-[-1] flex h-screen w-full flex-col gap-2   transition-all duration-500 ease-in-out
//       sm:static sm:flex
//       sm:h-fit sm:flex-row
//       sm:bg-transparent
//       ${openMenu ? "top-12 bg-white" : "top-[-490px]"}`}
//       >
//         {menuItems.map((item) => (
//           <li
//             key={item.name}
//             className=" text-right font-bold text-sol hover:bg-sol-50 hover:bg-opacity-50 sm:hover:bg-opacity-0 "
//           >
//             <Link
//               to={item.path}
//               onClick={() => setOpenMenu(!openMenu)}
//               className="block w-full p-2 pr-4 duration-300  hover:text-sol-m focus:ring-0 sm:transition-none sm:hover:text-sol-900"
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   </header>
// </div>
export default Header;
