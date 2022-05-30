import React from 'react'
import {Link} from 'react-router-dom'

export class login extends React.Component {
  constructor(props) {
    super(props)
  this.state={
      email:"",
      Password: ""
      
  }
  }
  handleChange=(event)=>{
    let name=event.target.name;
    let val=event.target.value;
    this.setState({[name]:val});
}
handleSubmit=(event)=>{
     
  event.preventDefault();
}
  render() {
    
    return (
      <div class="container h-100" >

<div class="col-10 col-md-8 col-lg-6">
        <h1 >
          Login
        </h1>
        <form onSubmit={this.handleSubmit} className="form-example">
          
          <input type="email" name="email" placeholder='Email Address' onChange={this.handleChange} className="form-control email"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        <br></br>
     
        <input type="password" name="Password" placeholder='Password' onChange={this.handleChange} className="form-control password"/>
        <br></br>
        </form>
        <p class="small fw-bold mt-2 pt-1 mb-0"> <Link to ="/PasswordPage" className="link-danger Blue" >Forgotten Password</Link>
                 </p>
        <input type="submit" value ="Login" class="btn btn-primary btn-customized"/>
        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?  <Link to ="/register" className="link-danger" >Register </Link>
                 </p>
      
      </div>
      </div>
    )
  }
}

export default login