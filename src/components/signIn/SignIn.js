import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './signInActions';


const mapStateToProps = (state) => {
  return {
    email: state.setSignInField.signInEmail,
    password: state.setSignInField.signInPassword 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEmailChange: (event) => dispatch(actions.onEmailChange(event.target.value)),
    onPasswordChange: (event) => dispatch(actions.onPasswordChange(event.target.value)),
    onSubmitSignIn: (email,password) => () => dispatch(actions.onSubmitSignIn(email,password))
  }
}


class SignIn extends Component {
  constructor(props){
    super(props);
  }

  



  render(){
    const {email,password} = this.props;
   
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" >Email</label>
              <input onChange={this.props.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"  name="email" id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" >Password</label>
              <input onChange={this.props.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="pw"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={this.props.onSubmitSignIn(email,password) } className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy mt3">
            <p  onClick={() => this.props.onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
          </div>
        </div>
      </main>
      </article>
    );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);