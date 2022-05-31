const connection = require(../../.dotAll./shared/database/connection)

class PersonsRepository {
  async checkPersonEmail(email){
    return connection('persons').where({ email })
  }
}

module.exports= PersonsRepository