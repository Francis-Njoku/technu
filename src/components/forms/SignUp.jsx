import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ActionBtn from '../buttons/ActionBtn'

export class SignUp extends Component {

  componentDidMount() {
    this.props.alternative('signUp')
  }


  render() {
    return (
      <React.Fragment>
        <form style={{margin: '120px 0'}} >
            <h1>Sign Up</h1>
            <div className="help_text">
              <p>Sign up with your email account </p>
            </div>

            <div className="input_fields">

              <label>
                <p>Select account type</p>
                <div className="select-wrapper">
                  <select name="" id="">
                    <option value="volvo">Playar</option>
                    <option value="saab">Terminator</option>
                    <option value="mercedes">Pro</option>
                    <option value="audi">Spectator</option>
                  </select>
                </div>
               
              </label>

              <label>
                <input type="text" placeholder='Email' />
              </label>
              <label>
                <input type="text" placeholder='Username' />
              </label>
              <label>
                <input type="text"placeholder='Password' />
              </label>
            </div>

            <div className='buttons_container' style={{margin: '10px 0'}}>
              
              <div>
                <div className="pretty p-icon p-curve" style={{marginRight: '0'}}>
                  <input type="checkbox" />
                  <div className="state">
                    <i className="icon material-icons">done</i>
                    <label><span className="spacer"></span></label>
                  </div>
                </div>
                <span style={{color: '#9fafb5', fontSize: '14px'}}> 
                  I accept PlayarOne's terms of service and have read PlayarOne's privacy policy 
                </span> 
              </div>


            </div>

            <div className="buttons_container">
              <ActionBtn link='/' class='blue h-spread full' text='CONTINUE' />
            </div>

            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <div className="buttons_container">
              <ActionBtn link='/discord' class='red h-spread full' text='REGISTER WITH DISCORD' />
            </div>

            <div className="form_footer">
              <p>
                We’re committed to protecting the privacy and security of your personal information. The information shared with us helps us to provide great experience.
              </p>
              <a href="/">Read Our Privacy Policy</a>
            </div>
            
          </form>


      </React.Fragment>
    )
  }
}

export default SignUp
