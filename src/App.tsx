// // import hero from './assets/hero.png'

// import HeroSection from "./components/hero-section"
// import Nav from "./components/nav"



// function App() {

//   // function clickMe(){
//   //   alert('You clicked me!')
//   // }

//   return (
//     // <div>
//     //   <h1>Hello</h1>
//     //   <img src={hero} alt="" />
//     //   <img src="/assets/react.svg" alt="" />
//     //   <button onClick={clickMe}>Click</button>
//     // </div>
//     <>
//       {/* <section className="min-h-screen flex justify-center items-center bg-slate-100">
//       <form action="" className='flex flex-col gap-5 bg-slate-50 p-5 rounded-md shadow-xl'>
//         <div className="flex flex-col gap-2">
//           <img src="/assets/react.svg" alt="" className='w-12.5' />
//           <h1>Login</h1>
//         </div>
        
//         <div className="flex flex-col gap-2">
//           <label htmlFor="">Email</label>
//           <input type="email" placeholder='Email' className='w-87.5 h-10 rounded-md border-none outline-none bg-white pl-3' />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="">Password</label>
//           <input type="password" placeholder='Password' className='w-87.5 h-10 rounded-md border-none outline-none bg-white pl-3' />
//         </div>

//         <div className="div">
//           <input type="submit" value='login' className='rounded-md border-none bg-purple-500 w-max text-white py-2 px-5 cursor-pointer' />
//         </div>
//       </form>
//      </section> */}
//       <Nav />
//       <HeroSection />
//     </>
//   )
// }

// export default App
import {Routes, Route} from "react-router-dom"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Homepage from "./pages/public/homepage"
import ForgotPassword from "./pages/auth/forgot-password"
import ViewPage from "./pages/public/view"
import AboutUs from "./pages/public/about"
<<<<<<< HEAD
import ContactUs from "./components/Contact-us"
=======
import Contact from "./pages/public/contact"
import ProfilePage from "./pages/auth/profile"
import OverviewPage from "./pages/dashboard/overview"
import UsersPage from "./pages/dashboard/users"
import BlogsPage from "./pages/dashboard/blogs"
import CategoryPage from "./pages/dashboard/category"
import AdminPage from "./pages/dashboard/admin"
import SettingsPage from "./pages/dashboard/settings"
>>>>>>> be818b7ce1d13fdd503b24e8ceac16f08eda25f4


function App() {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Homepage  />} />
<<<<<<< HEAD
     
      <Route path="/view/:title" element={<ViewPage  />} />
       <Route path="/about" element={<AboutUs  />} />
       <Route path="/contact" element={<ContactUs  />} />
=======
      <Route path="/about-us" element={<AboutUs  />} />
      <Route path="/contact" element={<Contact  />} />
      <Route path="/profile" element={<ProfilePage  />} />
      <Route path="/view/:title" element={<ViewPage  />} />

      {/* {DASHBOARD PAGES} */}
      <Route path="/overview" element={<OverviewPage  />} />
      <Route path="/users" element={<UsersPage  />} />
      <Route path="/blogs" element={<BlogsPage  />} />
      <Route path="/category" element={<CategoryPage  />} />
      <Route path="/admin" element={<AdminPage  />} />
      <Route path="/settings" element={<SettingsPage  />} />

>>>>>>> be818b7ce1d13fdd503b24e8ceac16f08eda25f4
    </Routes>
  )
}

export default App