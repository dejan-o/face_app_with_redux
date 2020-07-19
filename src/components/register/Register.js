import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './registerActions';
import Input from '@material-ui/core/Input';



const mapStateToProps = (state)=>{
    return {
      name: state.setRegisterField.registerName,
      email: state.setRegisterField.registerEmail,
      password: state.setRegisterField.registerPassword
    }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onNameChange: (event) => dispatch(actions.onNameChange(event.target.value)),
    onEmailChange: (event) => dispatch(actions.onEmailChange(event.target.value)),
    onPasswordChange: (event) => dispatch(actions.onPasswordChange(event.target.value)),
    onRegisterSubmit: (name,email,password) => () => dispatch(actions.onRegisterSumbit(name,email,password))
  }
}



class Register extends Component {
  constructor(props){
    super(props);
  }



  render(){
    
    const {name,email,password} = this.props;
    // Checking for valid inputs, and disable button if they are invalid
    const errName = !name.trim().length;
    const errEmail = !email.includes('@');
    const errPassword = !password.trim().length;
    let buttonInvalid = true;
    
    if(!errName && !errEmail && !errPassword)
      buttonInvalid = false;

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" >Name</label>
              <Input onChange={this.props.onNameChange} defaultValue="" error={errName}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"  name="name" id="name"/>
   
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" >Email</label>
              <Input onChange={this.props.onEmailChange} defaultValue="" error={errEmail}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"  name="email" id="email-address"/>
    
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" >Password</label>
              <Input onChange={this.props.onPasswordChange} defaultValue="" error={errPassword}  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"  name="pw" id="password"/>
    
            </div>
          </fieldset>
          <div className="">
            <input disabled={buttonInvalid} onClick={this.props.onRegisterSubmit(name,email,password)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
          </div>
          <div className="lh-copy mt3">
          </div>
        </div>
      </main>
      </article>
    );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);