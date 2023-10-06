import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import SignUpModal from "./Components/SignUpModal";
import SignInModal from "./Components/SignInModal";
import Private from "./Pages/Private/Private";
import PrivateHome from "./Pages/Private/PrivateHome/PrivateHome";

//import SignUp from './SignUp';
//var firebase = require('firebase');
//var firebaseui = require('firebaseui');

function App() {
  return (
   <>
      
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element=
          {<PrivateHome />} />


        </Route>
      </Routes>
    
   </>
  );
}

export default App;
