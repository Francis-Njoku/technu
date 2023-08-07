import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ActionBtn from '../../components/buttons/ActionBtn'

export class SignIn extends Component {

  componentDidMount() {
    this.props.alternative('signIn')
  }

  render() {
    return (
      <React.Fragment>
        <form >
            <h1>Sign In</h1>
            <div className="help_text">
              <p>Sign in with your email or username. <br/> Don't remember your password? <br/> 
              <span><Link to='/recover'> Recover Password </Link></span></p>
            </div>

            <div className="input_fields">
              <label>
                <input type="text" placeholder='Email/Username' />
              </label>
              <label>
                <input type="text"placeholder='Password' />
              </label>
            </div>

            <div className='buttons_container'>
              
              <div>
                <div className="pretty p-icon p-curve">
                  <input type="checkbox" />
                  <div className="state">
                    <i className="icon material-icons">done</i>
                    <label><span className="spacer"></span>Remember me</label>
                  </div>
                </div>
              </div>

              <div>
                <ActionBtn link='' class='blue h-spread full' text='LOGIN' />
              </div>

            </div>

            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            <div className="buttons_container">
              <ActionBtn link='/discord' class='red h-spread full' text='LOGIN WITH DISCORD' />
            </div>

          </form>
      </React.Fragment>
    )
  }
}

export default SignIn
