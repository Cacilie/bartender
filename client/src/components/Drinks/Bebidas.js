import React, { Component } from 'react';
import { Grid, Button, Image, Card, Header, Icon} from 'semantic-ui-react'
import BebidaSingle from './BebidaSingle';
import Config from '../../Config/config'
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
    width       : '95%'
  }
};

class Bebidas extends Component {

  state = {
    modalIsOpen: false,
    titleToOpen : '',
    imageToOpen : '',
    instructionsToOpen : '',
    drinkToOrder : {},
    open: false,
    infoToShow : {
      drinkInfo:{
        name: '',
        instructions: '',
        file: ''
      }
    }
  }

  _handleOpenModal = (drink) => {
    console.log(drink)
    this.setState({
      open: true,
      infoToShow: drink
    })
    console.log(this.state)
  }

  openModal = (bebida, name, file, instructions) => {
    console.log(bebida)
    this.setState({
      titleToOpen: name,
      modalIsOpen: true,
      imageToOpen: file,
      instructionsToOpen: instructions,
      drinkToOrder: bebida,
      open: true,
      infoToShow: bebida
    });
    console.log(this.state)
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  
	render() {
    let bebidas;
    if(this.props.bebidas){
      bebidas = this.props.bebidas.map( (bebida, i) => {
        return (
          <Card key={i}>
            <Image src={'http://localhost:3030/' + bebida.file} />
            <Card.Content>
              <Card.Header>
                {bebida.name}
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Button onClick={() => this.openModal(bebida, bebida.name, bebida.file, bebida.instructions)}>Mostrar Receta</Button>
            </Card.Content>
          </Card>
        );
      });
    }
		return (
      <div>
        {/*<Modal open={this.state.open} basic size='small'>
          <Header icon='info' content='Instrucciones' />
          <Modal.Content>
            <h3>{this.state.infoToShow.drinkInfo.name}</h3>
            <pre>
              {this.state.infoToShow.drinkInfo.instructions}
            </pre>
            <Image src={Config.apiUrl + this.state.infoToShow.drinkInfo.file}  size="medium"/>

          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={() => {
              this.setState({
                open: false
              })
            }}>
              <Icon name='remove' /> Cerrar
            </Button>

          </Modal.Actions>
          </Modal>*/}
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
