import React, { Component } from 'react';
import feathers from '../../feathers-client';
import Config from '../../Config/config'
import {Segment, Button, Table, Icon} from 'semantic-ui-react'
import moment from 'moment'



class ViewOrders extends Component{

  state = {
    orders : [],
    page  : 0,
    noItems : 10,
    total: 0
  }


  componentDidMount(){
    this.fetchData()
  }


  fetchData  = () =>{
    feathers.service('orders').find({
      query : {
        $skip: this.state.noItems * this.state.page
      }
    }).then(res => {
      console.log(res)
      this.setState({
        orders: res.data,
        total: res.total
      })
    })
  }

  renderTableBody = () => {
    return this.state.orders.map( (v, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell >{v.id}</Table.Cell>
          <Table.Cell >{v.drink_id}</Table.Cell>
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
              <Button animated  color="green" inverted>
                <Button.Content visible> Terminar </Button.Content>
                <Button.Content hidden>
                  <Icon name="send" />
                </Button.Content>
              </Button>
              <Button animated  color="blue" inverted>
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
