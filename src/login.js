import React from 'react'

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
          <label>
            UserName
          </label>
          <input type="email" name="email" placeholder='Enter email Address' onChange={this.handleChange} className="form-control email"/>
        <br></br>
        <label>
          Password
        </label>
        <input type="password" name="Password" placeholder='Enter Password' onChange={this.handleChange} className="form-control password"/>
        <br></br>
        </form>
        <input type="submit" value ="Submit" class="btn btn-primary btn-customized"/>
        </div>
      </div>
    )
  }
}

export default login