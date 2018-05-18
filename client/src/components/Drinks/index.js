import React, {Component} from 'react';
import feathers from '../../feathers-client';
import { Container } from 'semantic-ui-react'
import Bebidas  from './Bebidas';

class Drinks extends Component {
	
	state = {
		drinks: [],
	}

	componentDidMount() {
		const drinks = feathers.service('drinks');
		drinks.find().then(page => this.setState({drinks: page.data}));
	}

  render(){
    return(
      <Container>
        <h1>Bebidas</h1>
        <Bebidas bebidas={this.state.drinks}/>
      </Container>
    );
  }
}


export default Drinks;
