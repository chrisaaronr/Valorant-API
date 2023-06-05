//dependencies
const express = require('express');
const app = express();
const PORT = 3000; //any available port number


// API object
const valorant = {
    'viper': {
        'agentName': 'Viper',
        'realName': 'Sabine Callas',
        'role': 'Controller',
        'origin': 'United States'
    },
    'gekko': {
        'agentName': 'Gekko',
        'realName': 'Mateo Aremendariz De la Fuente',
        'role': 'Initiator',
        'origin': 'United States',
    },
    'neon': {
        'agentName': 'Neon',
        'realName': 'Tala Nicole Dimaapi Valdez',
        'role': 'Dualist',
        'origin': 'Phiippines',
    },
    'unknown': {
        'agentName': 'unknown',
        'realName': 'unknown',
        'role': 'unknown',
        'origin': 'unknown',
    }
};


//Serve HTML
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

// Serve JSON of API
/* app.get('/api', (request, response) => {
    response.json(valorant)
}); */
app.get('/api/:name', (request, response) => {
    const valorantName = request.params.name.toLowerCase();
    // console.log(valorant[valorantName])
    if (valorant[valorantName]) {
        response.json(valorant[valorantName])
    } else {
        response.json(valorant['unknown'])
    };
});




//PORT handler
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
});