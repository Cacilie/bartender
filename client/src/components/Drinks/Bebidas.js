import React, { Component } from 'react';
import { Grid, Button, Image, Card} from 'semantic-ui-react'
import BebidaSingle from './BebidaSingle';
import Modal from 'react-modal';
import './Bebidas.css';

const customStyles = {
  content : {
    top         : '50%',
    left        : '50%',
    right       : 'auto',
    bottom      : 'auto',
    marginRight : '-50%',
    transform   : 'translate(-50%, -50%)',
    width       : '35%'
  }
};

class Bebidas extends Component {

  constructor() {
		super();
		this.state = {
      books : [],
      modalIsOpen: false,
      titleToOpen : '',
      imageToOpen : '',
      instructionsToOpen : '',
    }
  }

  openModal = (name, file, instructions) => {
    this.setState({
      titleToOpen: name,
      modalIsOpen: true,
      imageToOpen: file,
      instructionsToOpen: instructions
    });
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  
	render() {
    let bebidas;
    if(this.props.bebidas){
      bebidas = this.props.bebidas.map(bebida => {
        return (
          <Card key="bebida.id">
            <Image src={'http://localhost:3030/' + bebida.file} />
            <Card.Content>
              <Card.Header>
                {bebida.name}
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={() => this.openModal(bebida.name, bebida.file, bebida.instructions)}>Mostrar Receta</Button>
            </Card.Content>
          </Card>
        );
      });
    }
		return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Receta"
        >
          <Card className="card_modal">
            <Card.Content>
              <Image floated='right' size='mini' src={'http://localhost:3030/' + this.state.imageToOpen} />
              <Card.Header>
                {this.state.titleToOpen}
              </Card.Header>
              <Card.Description>
                {this.state.instructionsToOpen}
              </Card.Description>
            </Card.Content>
          </Card>


          <button onClick={this.closeModal} style={{margin: "2em", float: "right"}}>Cerrar</button>
        </Modal>

      <Card.Group>
        {bebidas}
      </Card.Group>
      </div>
		)
	}
}


export default Bebidas;
