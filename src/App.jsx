import './App.css'
import { FaSearch, FaUser, FaPhone, FaShoppingCart } from "react-icons/fa"
import { ErrorPage } from "./components/errorPage";
import { Registration, Login, AllProducts, WigAccessories, Wigs, Home } from "./pages/allpages";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { SharedLayout } from "./components/sharedLayout";
import { FooterComponent } from "./components/footer";

/**ROUTES */
const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/wigs",
        element: <Wigs />
      },
      {
        path: "/accessories",
        element: <WigAccessories />
      },
      {
        path: "/allproduct",
        element: <AllProducts />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      }


    ]
  }
])

function App() {
  // fixed top - 0 left - 0 right - 0 sm: static
  return (
    <>
      <header className='bg-white w-full sm:w-full'>
        <div className='logo-related m-2 p-6 flex items-center justify-between flex-col sm:flex-row sm:  sm:m-5 sm:p-5 sm:mt-0'>
          <div className='logo flex items-center gap-2 text-2xl sm:text-lg mb-2'>
            <div className='logo-img'>

            </div>

            <div>
              Hair<span style={{ color: "#fc4103" }}>Nation</span>
            </div>
          </div>

          <div className='relative'>
            <form >
              <input
                type="search"
                placeholder='search'
                className="border-2 p-1.5 w-80"
              />
            </form>
            <FaSearch className='absolute top-3 right-2 color-gray' />
          </div>

          <div className='accounts flex items-center gap-4'>
            <FaUser />
            {/**Conditional rendering */}
            My account
          </div >

          <div className='contact accounts flex items-center gap-4'>
            <FaPhone />
            Contact Us
          </div>

          <div className='cart-related flex items-center gap-4'>
            <FaShoppingCart />
            Cart
          </div>
        </div>


      </header>

      <div className="container">
        <RouterProvider router={router} />
      </div>


      {/* absolute bottom-0 */}
      <footer className='footer w-full bg-black h-20 text-white'>
        <h1>Reviews</h1>
        <FooterComponent />
      </footer>
    </>
  )
}

export default App
