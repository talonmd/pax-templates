import React from "react"

import FormInput from "../form/form-input"
import CustomButton from "../form/custom-button"

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    // [TO DO] client side data validation

    const { email, password } = this.state

    // until I make a better solution...
    window.alert("One minute while we start up the servers.")
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">Log in to Avarice</h2>
        <form className="sign-in__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit" formButton>
            Log In
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
