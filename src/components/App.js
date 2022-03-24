
import React , { useEffect, useState }from "react";
import AppRouter from "components/Router";
import {authService} from "fbase";


function App() {

  const [init,setInit] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);



  useEffect(()=>{

    authService.onAuthStateChanged((user)=>{
    
    if(user){

      setIsLoggedIn(true);
      console.log("the set is logged in")
  

    } else {
      setIsLoggedIn(false);
    } 
    
    setInit(true);
    console.log("set init")

  })} , [])


  return (

    <>

  {init? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..." }
  <footer>&copy; Nwitter {new Date().getFullYear()}</footer>

  </>

  
  )

 
  
}

export default App;
