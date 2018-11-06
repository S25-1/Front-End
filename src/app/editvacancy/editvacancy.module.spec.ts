import { EditvacancyModule } from './editvacancy.module';

describe('VacancyModule', () => {
  let editvacancyModule: EditvacancyModule;

  beforeEach(() => {
    editvacancyModule = new EditvacancyModule();
  });

  it('should create an instance', () => {
    expect(editvacancyModule).toBeTruthy();
  });
});
