import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class PasswordPage extends Component {
    constructor(props) {
        super(props)
      this.state={
          ConfirmPassword:"",
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
      if((this.state.Password===this.state.ConfirmPassword) && (this.state.Password).length!==0)
{
alert("you have created a new Password");
   }
   else{
     alert("Please give the correct confirm password");
   }

    }
  render() {
    return (
        <div class="col-10 col-md-8 col-lg-6">
          <form onSubmit={this.handleSubmit} className="form-example">
          Create Password 
          <input type="password" name="Password"  onChange={this.handleChange} className="form-control password" required/>
        <br></br>
        Confirm Password
        <input type="password" name="ConfirmPassword"  onChange={this.handleChange} className="form-control password" required/>
        <br></br>
        <Link to ="/login" className="link-danger" >

        <input type="submit" value ="Submit" class="btn btn-primary btn-customized" />
        </Link>
          </form>
      </div>
    )
  }
}

export default PasswordPage