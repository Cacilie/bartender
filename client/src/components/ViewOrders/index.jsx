import React, { Component } from 'react';
import feathers from '../../feathers-client';
import Config from '../../Config/config'
import {Segment, Button, Table, Icon, Modal, Header, Image} from 'semantic-ui-react'
import moment from 'moment'



class ViewOrders extends Component{

  state = {
    orders : [],
    page  : 0,
    noItems : 10,
    total: 0,
    open: false,
    infoToShow : {
      drinkInfo:{
        name: '',
        instructions: '',
        file: ''
      }
    }
  }


  componentDidMount(){
    this.fetchData()
  }


  fetchData  = () =>{
    feathers.service('orders').find({
      query : {
        $skip: this.state.noItems * this.state.page,
        delivered: {
          $lt:  1
        }
      }
    }).then(res => {
      console.log(res)
      this.setState({
        orders: res.data,
        total: res.total
      })
    })
  }

  _handleOpenModal = (drink) => {
    console.log(drink)
    this.setState({
      open: true,
      infoToShow: drink
    })
  }

  _handleFinishDrink = async (drink) => {
    console.log(drink)
    await feathers.service('orders').patch(drink.id, {
      delivered: moment().format('YYYY-MM-DD HH:mm:ss')
    })
    this.fetchData()
  }


  renderTableBody = () => {
    return this.state.orders.map( (v, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell >{v.id}</Table.Cell>
          <Table.Cell >{v.drinkInfo.name}</Table.Cell>
          <Table.Cell >{moment(v.ordered).format()}</Table.Cell>
          <Table.Cell >{v.quantity}</Table.Cell>
          <Table.Cell >{v.name}</Table.Cell>
          <Table.Cell>
            <Button.Group>
              <Button animated  color="red" inverted>
                <Button.Content visible> Cancelar </Button.Content>
                <Button.Content hidden>
                  <Icon name="trash" />
                </Button.Content>
              </Button>
              <Button animated  color="green" inverted onClick={() => this._handleFinishDrink(v)}>
                <Button.Content visible> Terminar </Button.Content>
                <Button.Content hidden>
                  <Icon name="send" />
                </Button.Content>
              </Button>
              <Button animated  color="blue" inverted onClick={() => this._handleOpenModal(v)}>
                <Button.Content visible> Ver </Button.Content>
                <Button.Content hidden>
                  <Icon name="search" />
                </Button.Content>
              </Button>
            </Button.Group>
          </Table.Cell>
        </Table.Row>
      )
    })
  }


  render(){
    return(
      <div>
        <Modal open={this.state.open} basic size='small'>
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
        </Modal>
        <Segment style={{
          display: "flex"
        }}>

          <Table style={{
            flex: 1
          }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Bebida</Table.HeaderCell>
                <Table.HeaderCell>Ordenada</Table.HeaderCell>
                <Table.HeaderCell>Cantidad</Table.HeaderCell>
                <Table.HeaderCell>Nombre</Table.HeaderCell>
                <Table.HeaderCell>Acciones</Table.HeaderCell>


              </Table.Row>
            </Table.Header>
            <Table.Body>
              <this.renderTableBody />
            </Table.Body>
          </Table>
        </Segment>
      </div>
    )
  }

}
export default ViewOrders
