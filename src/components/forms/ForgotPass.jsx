import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ActionBtn from '../../components/buttons/ActionBtn'

export class ForgotPass extends Component {

  componentDidMount() {
    this.props.alternative('signIn')
  }

  render() {
    return (
      <React.Fragment>
        <form >
            <h1>Forgot Password</h1>
            <div className="help_text" style={{flexDirection: 'column'}}>
              <p style={{marginBottom: '2.5px'}}>Don't worry. </p>
              <p style={{marginTop: '2.5px'}}>Just fill in your email and we'll send a new password </p>
            </div>

            <div className="input_fields">
              <label>
                <input type="text" placeholder='Email' />
              </label>
  
            </div>

            <div className='buttons_container'>
              
              <div>
                {/* Empty left side div for pretty icon */}
              </div>

              <div>
                <ActionBtn link='/sign-in' class='blue h-spread full' text='RESET PASSWORD' />
              </div>

            </div>

          </form>
      </React.Fragment>
    )
  }
}

export default ForgotPass
