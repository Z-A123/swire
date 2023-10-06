import React, { useContext, useRef, useState} from "react";

import { UserContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  
  const {modalState, toggleModals, signIn} = useContext(UserContext);
  //console.log(signUp);
  const navigate = useNavigate();
  
  const [validation, setValidation] = useState("");
  
  
  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
       }
     }

  const formRef = useRef();   
    
  const handleForm = async (e) => {
    e.preventDefault()

    
    
    try {
      
        const cred = await signIn(
            inputs.current[0].value,
            inputs.current[1].value
        )
        // à tester
        //formRef.current.reset();
        setValidation("")
        toggleModals("close")
        //console.log(cred);
        navigate("/private/private-home")

    } catch {
        setValidation("wopsy, email and/or password incorrect")

       

    }

 }

 const closeModal = () => {
    setValidation("")
    toggleModals("close")
 }
  


  return (
    <>
    {modalState.signInModal && (
    <div 
    className="position-fixed top-0 vw-100 vh-100">
        
        <div 
        onClick={closeModal}
        className="w-100 h-100 bg-dark bg-opacity-75">
        </div> 
        <div className="position-absolute top-50 start-50 translate-middle"
         style={{minWidth: "400px"}}
         >
         <div className="p-3 mb-2 bg-danger text-white">
            <div className="modal-content">
                <div className="modal-header"></div>
                    
                    <button
                    onClick={closeModal}
                    className="btn-close "></button>
                    <h5 className="modal-title text-center "> SignIn</h5>

            </div>

            <div className="modal-body">

                <form 
                ref={formRef}
                onSubmit={handleForm}
                className="sign-up-form">

                    <div className="mb-3">

                        <label htmlFor="signInEmail" className="form-label text-color-light">Email adress</label>
                        <input
                        ref={addInputs}
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signInEmail"
                        />
                    </div>
                    
                      <div className="mb-3">

                        <label htmlFor="signInPwd" className="form-label">Password</label>
                        <input
                         ref={addInputs}
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signInPwd"
                        />
                        <p className="text-danger mt-1">{validation}</p>
                    </div>
                    
                    
                    
                    <button className="btn btn-primary"> Submit</button>

                </form>


            </div>
         </div>


        </div>

    

    </div>
    )}
    </>
  )
}
