import React, { Component } from  'react';
import { Grid, Form, Button, Icon} from 'semantic-ui-react'
import background from './girl-min.jpg'
class Login extends Component {
  render () {
    return (
      <div style={sectionStyles}>
        <Grid centered columns={4} >

          <Grid.Row style={gridStyles}>
            <Grid.Column >
              <Icon name="user outline" size="massive"  style={iconStyles} inverted/>

              <Form >
                <Form.Field>
                  <label style={labelStyles} >Email</label>
                  <input placeholder='Email' type="email" />
                </Form.Field>
                <Form.Field>
                  <label style={labelStyles} >Password</label>
                  <input placeholder='Password' type="password" />
                </Form.Field>
                <Button type='submit' icon="send" content="Iniciar Sesión" />
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
    height: 1000, 
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
