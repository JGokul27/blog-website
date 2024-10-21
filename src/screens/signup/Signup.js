import React, { useState } from 'react'
import Appsubmitbutton from '../../components/appsubmitbutton/Appsubmitbutton';
import { useAuthentication } from '../../hooks/useAuthentication';
import './Signup.css';
export default function Signup() {

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [firstname, setFirstName] = useState('')

    const [lastname, setLastName] = useState('')

    const[validationError, setValidationError] = useState(null)

    const { signup, error } = useAuthentication()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!email){
            setValidationError("Email cannot be empty")
            return
        }
        else if(!password){
            setValidationError("Password cannot be empty")
            return
        }
        else if(!firstname){
            setValidationError("Firstname cannot be empty")
            return
        }
        else if(!lastname){
        setValidationError("Lastname cannot be empty")
        return
        }
        setValidationError(null)

        console.log({email,password,firstname,lastname})
        signup({email,password,firstname,lastname})
    }
    return (
      <div className="outercontainer">
        <h2 className="pb-4 fs-1">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {validationError && (
            <div className="alert alert-danger" role="alert">
              {validationError}
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <div className="float-end">
            <Appsubmitbutton title="Signup" />
          </div>
        </form>
      </div>
    );
}
