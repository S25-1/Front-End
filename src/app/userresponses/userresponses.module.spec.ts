import { UserresponsesModule } from './userresponses.module';

describe('VacancyresponsesModule', () => {
  let userresponsesModule: UserresponsesModule;

  beforeEach(() => {
    userresponsesModule = new UserresponsesModule();
  });

  it('should create an instance', () => {
    expect(userresponsesModule).toBeTruthy();
  });
});
