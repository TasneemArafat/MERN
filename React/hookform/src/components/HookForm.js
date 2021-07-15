import React, {useState} from 'react'

const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setConfirmpasswordError] = useState("");

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, lastname, email, password };
    //     console.log("Welcome", newUser);
    // };

    const firstnameMessage = (e) => {
        setFirstname(e.target.value) 
        if( e.target.value.length < 2 ) {
            setFirstnameError("First Name must be at least 2 characters");
        }
        else{
            setFirstnameError("");
        }
    };
    const lastnameMessage = (e) => {
        setLastname(e.target.value) 
        if( e.target.value.length < 2 ) {
	        setLastnameError("Last Name must be at least 2 characters");
        }
        else{
            setLastnameError("");
        }
    };
    const emailMessage = (e) => {
        setEmail(e.target.value) 
        if( e.target.value.length < 2 ) {
	        setEmailError("Email must be at least 2 characters");
        }

        else{
            setEmailError("");
        }
    };
    const passwordMessage = (e) => {
        setPassword(e.target.value) 
        if( e.target.value.length < 8 ) {
	        setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    };
    const confirmpasswordMessage = (e) => {
        setConfirmpassword(e.target.value) 
        if( password != confirmpassword ) {
	        setPasswordError("Passwords must match");
        }
        else {
            setPasswordError("");
        }
    };

    return (
        <div>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ firstnameMessage } />
            </div>
            <p>{firstnameError}</p>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ lastnameMessage } />
            </div>
            <p>{lastnameError}</p>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ emailMessage } />
            </div>
            <p>{emailError}</p>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ passwordMessage } />
            </div>
            <p>{passwordError}</p>
            <p>{confirmpasswordError}</p>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmpassword} onChange={ confirmpasswordMessage } />
            </div>
        </form>
          {/* <p>Your Form Data</p>
          <p>First Name: {firstname}</p>
          <p>Last Name: {lastname}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Confirm Password: {confirmpassword}</p> */}
        </div>
    )
}

export default HookForm
