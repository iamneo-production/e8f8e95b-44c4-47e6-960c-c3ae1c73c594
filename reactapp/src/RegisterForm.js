import React from 'react';
import './App.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["email"] = "";
          fields["mobilenumber"] = "";
          fields["password"] = "";
          fields["confirmpassword"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email.";
      }

      if (typeof fields["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email.";
        }
      }

      if (!fields["mobilenumber"]) {
        formIsValid = false;
        errors["mobilenumber"] = "*Please enter your mobile number.";
      }

      if (typeof fields["mobilenumber"] !== "undefined") {
        if (!fields["mobilenumber"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobilenumber"] = "*Please enter valid mobile number.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
      if (!fields["confirmpassword"]) {
        formIsValid = false;
        errors["confirmpassword"] = "*please enter confirmpassword.";
      }
      if (typeof fields["confirmpassword"] !== "undefined") {
        if (!fields["confirmpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["confirmpassword"] = "*password and confirmpassword must same.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h1>Register Here</h1>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>username</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>email</label>
        <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.email}</div>
        <label>mobilenumber</label>
        <input type="text" name="mobilenumber" value={this.state.fields.mobilenumber} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobilenumber}</div>
        <label>password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>confirmpasword</label>
        <input type="password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.confirmpassword}</div>
        <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                <p className="forgot-password text-right">
                   <h3> Already registered <a href="#">sign in?</a></h3>
                </p>

        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;
