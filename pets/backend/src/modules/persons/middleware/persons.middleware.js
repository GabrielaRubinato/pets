const PersonsRepository = require('../repositores/PersonsRepository');

module.exports = {
  verifyPayloadForCreations(request, response, next) {
    const { name, email, whatsapp, password, cep } = request.body;
    if (!name) {
      throw new Error('Name not found');
    }
    if (!email) {
      throw new Error('Email not foud');
    }
    if (!whatsapp) {
      throw new Error('Whatsapp not foud');
    }
    if (!password) throw new Error('password not foud');

    if (!cep) {
      throw new Error('Cep not foud');
    }
    next();
  },
  asyncverifyEmailAlreadyExists(request, response, next) {},
};
