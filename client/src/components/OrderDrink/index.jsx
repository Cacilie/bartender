import React, { Component } from 'react';
import {Form, Button, Segment, Card, Image} from 'semantic-ui-react'
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import feathers from '../../feathers-client';
import Config from '../../Config/config'


const format = 'h:mm a';
const now = moment().hour(0).minute(0);

const formStyle = {
  margin: 10
}

class OrderDrink extends Component {

  state = {
    newOrder : {
      drink_id: this.props.match.params.id,
      ordered: 0,
      delivered: 0,
      name: '',
      arravingtime: moment().format('LTS'),
      quantity: 1
    },
    loading: false,
    drink: {}
  }

  componentDidMount(){
    this.fetchData()
    console.log(Config)
  }

  fetchData = () => {
    this.setState({
      loading: true
    }, () => {
      feathers.service('drinks').get(this.props.match.params.id).then(res => {
        this.setState({
          drink: res
        })
        console.log(res)
      })
      this.setState({
        loading: false
      })
    })
  }


  saveOrder = async () => {
    if(!this.state.newOrder.name) return
    await this.setState({
      newOrder: {
        ...this.state.newOrder,
        ordered: moment().format(),
        delivered: null,
      }
    })
    console.log(this.state.newOrder)
  }

  _handleTimeChange = (value) =>{
    this.setState({
      newOrder: {
        ...this.state.newOrder,
        arravingtime: value.format(format)
      }
    })
  }

  render(){
    return(
      <div>
        <Segment raised loading={this.state.loading} >
          <h1 style={
              {
                margin: "auto"
              }
            } >Ordenar</h1>

          <Form style={formStyle}>
            <Form.Field>
              <Card style={
                  {
                    margin: 'auto'
                  }
                }>
                <Image src={Config.apiUrl + this.state.drink.file} size='small'/>
                <Card.Content>
                  <Card.Header>
                    {this.state.drink.name}
                  </Card.Header>
                  <Card.Description>
                    {this.state.drink.instructions}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Form.Field>
            <Form.Field>
              <label>Nombre</label>
              <input placeholder='Nombre' onChange={(e) => {
                  this.setState({
                    newOrder: {
                      ...this.state.newOrder,
                      name: e.target.value
                    }
                  })
                }}
                value={this.state.newOrder.name}
                />
            </Form.Field>
            <Form.Field>
              <label>Cantidad</label>
              <input placeholder='Nombre' onChange={(e) => {
                  this.setState({
                    newOrder: {
                      ...this.state.newOrder,
                      quantity: e.target.value
                    }
                  })
                }}
                value={this.state.newOrder.quantity}
                />
            </Form.Field>
            <Form.Field>
              <label>Hora de llegada</label>

              <TimePicker
                  showSecond={false}
                  defaultValue={now}
                  className="xxx"
                  onChange={this._handleTimeChange}
                  format={format}
                  use12Hours
                  inputReadOnly
                />
            </Form.Field>
            <Button type='submit' content="Enviar" icon="send" onClick={this.saveOrder} />
          </Form>
        </Segment>
      </div>
    )
  }
}

export default OrderDrink
