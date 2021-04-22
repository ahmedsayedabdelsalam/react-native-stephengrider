import React, { Component } from 'react'
import {Button, Card, CardSection, Input} from './common'

export class LoginForm extends Component {
  state = {email: ''};

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Email"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>
      
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
