class CreatePersonsService {
  constructor(personsRepository) {
    this.personsRepository = personsRepository;
  }
  async execute(payload) {
    const persons = await this.personsRepository.createPerson(payload);

    return person;
  }
}

module.exports = CreatePersonsService;
