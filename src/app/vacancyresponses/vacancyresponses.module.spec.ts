import { VacancyresponsesModule } from './vacancyresponses.module';

describe('VacancyresponsesModule', () => {
  let vacancyresponsesModule: VacancyresponsesModule;

  beforeEach(() => {
    vacancyresponsesModule = new VacancyresponsesModule();
  });

  it('should create an instance', () => {
    expect(vacancyresponsesModule).toBeTruthy();
  });
});
