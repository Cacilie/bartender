import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client'

const app = feathers();

// Connect to a different URL
const restClient = rest('http://localhost:3030')

// Configure an AJAX library (see below) with that client
app.configure(restClient.fetch(window.fetch));

export default app;
