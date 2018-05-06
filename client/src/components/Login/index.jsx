import React, { Component } from  'react';
import { Grid, Form, Button, Icon} from 'semantic-ui-react'
import background from './girl-min.jpg'
import feathers from '../../feathers-client';
import md5 from 'md5'
class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmitButton = async () => {
    if(!this.state.email) return
    if(!this.state.password) return
    await feathers.service('user_credentials').find({
      query : {
        email: this.state.email,
        password: md5(this.state.password)
      }
    }).then( res => {
      console.log(res)
    })
  }


  render () {
    return (
      <div style={sectionStyles}>
        <Grid centered columns={4} >

          <Grid.Row style={gridStyles}>
            <Grid.Column >
              <Icon name="user outline" size="massive"  style={iconStyles} inverted/>
              <Form >
                <Form.Field required>
                  <label style={labelStyles} >Email</label>
                  <input placeholder='Email' type="email" value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />
                </Form.Field>
                <Form.Field required>
                  <label style={labelStyles} >Password</label>
                  <input placeholder='Password' type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} />
                </Form.Field>
                <Button type='submit' icon="send" content="Iniciar Sesión" onClick={this.handleSubmitButton}/>
              </Form>
            </Grid.Column>
          </Grid.Row>

       </Grid>
      </div>
    )
  }
}



const gridStyles = {
  backgroundColor: 'rgba(76, 76, 201, 0.3)',
  marginTop: '15em'
}

const sectionStyles = {

    backgroundImage: `url(${background})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "0",
    width: "100%",
    height: 880,
    overflow: 'hidden'
}

const iconStyles = {
  marginLeft: '35%',
  marginBottom: '0.5em'
}

const labelStyles = {
  color: 'white'
}




export default Login;
