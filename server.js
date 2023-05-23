const express = require('express');
const app = express();
const PORT = 4000;

const drugs = {
  'mdma': {
    'street name': 'MDMA',
    'real name': 'methylenedioxymethamphetamine',
    'type': 'psychoactive drug',
    'effect': 'blurred visuals'
  },
  'Cannibas ': {
    'street name': 'Green',
    'real name': 'THC',
    'type': 'psychoactive drug',
    'effect': 'makes you paranoid'
  }
};

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
  const drugName = request.params.name.toLowerCase();
  
  if (drugs.hasOwnProperty(drugName)) {
    response.json(drugs[drugName]);
    console.log(drugs[drugName].effect);
  } else {
    response.status(404).json({ error: 'Drug not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}!`);
});
