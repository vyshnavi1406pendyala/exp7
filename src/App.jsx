import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        dob: "",
        password: "",
        confirm: "",
        terms: false
      },  errMsg: {} };
  }
  
  handleSubmit(){
    if(this.validate())
      alert("Registration Success!");
  }

  handleInput(e) {
    this.setState({ formData: {...this.state.formData, [e.target.name]: e.target.value} });
  }

  validate(){
    const { formData } = this.state;
    let newErrors = {};
    
    if (!formData.firstName.trim()) 
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) 
      newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) 
      newErrors.email = "Email ID is required";
    if (!formData.phone.trim()) 
      newErrors.phone = "Phone number is required";
    if (!formData.country) 
      newErrors.country = "Please select country";
    if (!formData.dob) 
      newErrors.dob = "Date of birth required";
    if (formData.password.length < 8) 
      newErrors.password = "Password must vave 8 chars";
    if (formData.password !== formData.confirmpassword) 
      newErrors.confirmpassword = "Passwords not matched";
    if (!formData.terms) 
      newErrors.terms = "Accept terms to proceed";

    this.setState({ errMsg: newErrors });
    return Object.keys(newErrors).length === 0;
  }

  render() {
    const{formData, errMsg} = this.state;
    return (
      <>
        <header>
          <div className='logo'>Validation</div>
        </header>
        <section>
          <div className='content'>
            <h1>Create Account</h1>
            <div className='grid'>
              <div>
                <label>First Name *</label>
                <input type='text' name='firstName' value={formData.firstName} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.firstName}</p>
              </div>
              <div>
                <label>Last Name *</label>
                <input type='text' name='lastName' value={formData.lastName} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.lastName}</p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Email ID *</label>
                <input type='text' name='email' value={formData.email} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.email}</p>
              </div>
              <div>
                <label>Phone Number *</label>
                <input type='text' name='phone' value={formData.phone} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.phone}</p>
              </div>
            </div>

            <div className='grid'>
              <div>
                <label>Select Country *</label>
                <select name='country' value={formData.country} onChange={(e)=>this.handleInput(e)}>
                  <option>Select..</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>Europe</option>
                </select>
                <p>{errMsg.country}</p>
              </div>
              <div>
                <label>Date of Birth *</label>
                <input type='date' name='dob' value={formData.dob} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.dob}</p>
              </div>
            </div>
            <div className='grid'>
              <div>
                <label>Password *</label>
                <input type='password' name='password' value={formData.password} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.password}</p>
              </div>
              <div>
                <label>Confirm Password *</label>
                <input type='password' name='confirmpassword' value={formData.confirmpassword} onChange={(e)=>this.handleInput(e)} />
                <p>{errMsg.confirmpassword}</p>
              </div>
            </div>

            <div className='terms'>
              <input type='checkbox' name='terms' value={formData.terms} onChange={(e)=>this.handleInput(e)} />
              <label>I agree the Terms and Conditions</label>
              <p>{errMsg.terms}</p>
            </div>

            <div className='submission'>
              <button onClick={()=>this.handleSubmit()}>Register</button>
            </div>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;