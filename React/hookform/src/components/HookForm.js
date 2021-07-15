import React, {useState} from 'react'

const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    return (
        <div>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
        </form>
          <p>Your Form Data</p>
          <p>First Name: {firstname}</p>
          <p>Last Name: {lastname}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Confirm Password: {confirmpassword}</p>
        </div>
    )
}

export default HookForm
