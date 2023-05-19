import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../src/Pages/Home/Home';
import About from "../src/Pages/About/About";
import BookList from "../src/Components/BookList/BookList";
import BookDetails from "../src/Components/BookDetails/BookDetails";
import { AppProvider } from './context.';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   <AppProvider>
   <BrowserRouter>
     <Routes>
       <Route path = "/" element = {<Home />}>
         <Route path = "about" element = {<About />} />
         <Route path = "book" element = {<BookList />} />
         <Route path = "/book/:id" element = {<BookDetails />} />
       </Route>
     </Routes>
   </BrowserRouter>
 </AppProvider>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

