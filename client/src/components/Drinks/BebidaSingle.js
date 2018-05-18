import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'


class BebidaSingle extends Component {

render() {
  return (
    <Card>
      <Image src={'http://localhost:3030/' + this.props.file} />
      <Card.Content>
        <Card.Header>
          {this.props.name}
        </Card.Header>
        
      </Card.Content>
      <Card.Content extra>
        <Button>Mostrar Receta</Button>
      </Card.Content>
    </Card>
  );
}
}


export default BebidaSingle;