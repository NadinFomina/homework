import React from 'react';
import ReactDOM from 'react-dom/client';

// import Footer from './footerShop'
// import Header from './HeaderShop'
// import Shop from './Product';
// import Postt from './first'
// import './blog.css'
import Posts from './Router';
import App from './App';
// import ListMy from './list';
// import Categories from './catigories';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './user.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <BrowserRouter>
                  {/* <Route path='/' element={<App />}>

                  </Route> */}
                  <App/>

            </BrowserRouter>
      </React.StrictMode>
      // <BrowserRouter>
      //       <Routes>
      //             <Route path="/" element={< App />}>
      //                   <Route path="/" element={< Posts />}></Route>
      //                   <Route path="/post/:id" element={< ListMy />}></Route>
      //                   <Route path="/category/id" element={< Categories />}></Route>
      //                   {/*<Route path="/tag/:id" element={< Tag />}></Route> */}
      //             </Route>

      //       </Routes>
      // </BrowserRouter>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
