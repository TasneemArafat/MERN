const ManagerController = require('../controllers/manager.controller')
module.exports = app => {
app.get('/api/player', ManagerController.findAllPlayers);
app.get('/api/player/:id', ManagerController.findOneSinglePlayer);
app.post('/api/player', ManagerController.createNewPlayer);
app.delete('/api/player/:id', ManagerController.deleteAnExistingPlayer);
}