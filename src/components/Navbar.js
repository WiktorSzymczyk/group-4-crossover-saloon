import { NavLink } from "react-router-dom";
import { Stack, Button, Divider } from "@mui/material";
import logo from "../img/logo.png";

export default function Navbar({ categoryList }) {
  const handleClick = (event) => {};
  return (
    // <Stack
    //   direction="row"
    //   divider={<Divider orientation="vertical" flexItem />}
    //   spacing={2}
    //   mb={4}
    // >
    <div className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <img src={logo} alt="logo" className="w-[10%]" />
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4 font-bold"
              href="/"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4"
              href="#"
            >
              <NavLink to="/herren">Herren</NavLink>
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4"
              href="#"
            >
              <NavLink to="/damen">Damen</NavLink>
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4 whitespace-nowrap"
              href="#"
            >
              <NavLink to="/juniorAndKider">Juniors and Kinder</NavLink>
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4 whitespace-nowrap"
              href="#"
            >
              Our Products
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4"
              href="#"
            >
              Appointment
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4 whitespace-nowrap"
              href="#"
            >
              Special Offers
            </a>
          </li>

          <li>
            <a
              className="text-sm text-black-600 hover:text-gray-500 hover:border-2 hover:border-black hover:p-2 hover:underline hover:underline-offset-4"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="navbar-menu relative z-50 hidden" onClick={handleClick}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div id="nav-open-mobile" className="display-none">
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Mens
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Women
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Our Products
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Appointment
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    //   {/* //   <Button size="small">
    //     <NavLink style={{ textDecoration: "none" }} to="/">
    //       Home
    //     </NavLink>
    //   </Button>
    //   {categoryList.map((category) => (
    //     <Button size="small">
    //       <NavLink style={{ textDecoration: "none" }} to={category}>
    //         {category}
    //       </NavLink>
    //     </Button>
    //   )
    //   )
    // } */}
    // </Stack>
  );
}
