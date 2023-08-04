import { useState } from "react";
import About from "./pages/About"
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import './App.css'
import Meal from "./components/Home";
import { Myrecipe } from "./pages/Myrecipe";
import { Profile } from "./components/Profile";
import {  Routes, Route } from 'react-router-dom'


function App() {
  const [token, setToken] = useState([])
  if (!token){
    return<LandingPage setToken={setToken}/>
  }
  console.log(">>>>> token")
  console.log(token)
  return (
    <div className="App">


      <>
        <Navbar />
        <div>

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/landingpage" element={<LandingPage/>}/>
                <Route path="/recipes" element={<Meal/>}/>
                <Route path="/myrecipes" element={<Myrecipe/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contacts/>}/>
            </Routes>



        <Footer />
        </div>

      </>

    </div>
  )
}

export default App
