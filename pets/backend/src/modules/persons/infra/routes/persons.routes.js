const { Router } = require('express');

const PersonsController = require('../controllers/PersonsController');
const personsMiddleware = require('../../middleware/persons.middleware');

const personsRoutes = Router();
const personsController = new PersonsController();

personsRoutes.post(
  '/',
  personsMiddleware.verifyPayloadForCreations,
  personsController.createPersons
);

personsRoutes.get('/', personsController.getAllPersons);

personsRoutes.put('/', personsController.updatePersons);

personsRoutes.delete('/', personsController.deletePersons);

module.exports = personsRoutes;
