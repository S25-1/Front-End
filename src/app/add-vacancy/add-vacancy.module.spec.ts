import { AddVacancyModule } from './add-vacancy.module';

describe('AddVacancyModule', () => {
  let addVacancyModule: AddVacancyModule;

  beforeEach(() => {
    addVacancyModule = new AddVacancyModule();
  });

  it('should create an instance', () => {
    expect(addVacancyModule).toBeTruthy();
  });
});
