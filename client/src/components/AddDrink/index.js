import React, {Component} from 'react';
import feathers from '../../feathers-client';
import { Grid, Segment, Form, Button, Image} from 'semantic-ui-react'
import { Dropzone } from '../Dropzone'

class AddDrink extends Component {
  state = {
    files: [],
    bebida: {
        name: null,
        instructions:  '',
    },
    image : null,
    }

  onImageDrop(files, rejectedFiles) {
        this.setState({ files })
  }

  onDropChange = (image) => {
        this.setState({ image })
  }

  handleSubmit = async() => {
    if(!this.state.bebida.name) return
    if(!this.state.image.base64) return
    if(!this.state.bebida.instructions) return
    console.log("Estado ",this.state)
    await feathers.service('drinks').create({
        name: this.state.bebida.name,
        filetosend: this.state.image.base64,
        instructions: this.state.bebida.instructions
    })
  }

  render(){
    return(
      <div>
        <Grid centered columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Segment inverted style={formStyles}>
                <Form inverted >
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Nombre' placeholder='Nombre' onChange={(e, d) => {
                      this.setState({
                        bebida: {
                          ...this.state.bebida,
                          name: d.value
                        }
                      })
                    }} />
                  </Form.Group>
                   <Form.TextArea label='Descripciones' placeholder='Escribe las instrucciones' onChange={(e, d) => {
                     this.setState({
                       bebida: {
                         ...this.state.bebida,
                         instructions: d.value
                       }
                     })
                   }} />
                   <Form.Group>
                     <Dropzone onChange={this.onDropChange}  image={this.state.image}>
                        <p>Agregar Imagen</p>
                     </Dropzone>
                   </Form.Group>

                  <Button type='submit' content="Enviar" icon="send" onClick={this.handleSubmit}/>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

const formStyles = {
  'marginTop': 100
}

export default AddDrink;
