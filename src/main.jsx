// import { Children, StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Layout from './components/Layout.jsx'
// import Home from './components/Home/Home.jsx'

// const router = createBrowserRouter([
//  {
//   path: '/', 
//   Element : <Layout/>,
//   Children:[
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     }
//   ]
// }
// ])

  
// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
     {
      path:"contact",
      element: <Contact/>
     },
      {
        path:"User/:userid",
        element:<User/>
      },
       {
        path:"Github",
        element:<Github/>
      }

    ]
  }
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<Home/>}/>
//       <Route path='contact' element={<Contact/>}/>
//     </Route>

//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

