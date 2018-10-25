import { EditvacatureModule } from './Editvacature.module';

describe('VacatureModule', () => {
  let editvacatureModule: EditvacatureModule;

  beforeEach(() => {
    editvacatureModule = new EditvacatureModule();
  });

  it('should create an instance', () => {
    expect(EditvacatureModule).toBeTruthy();
  });
});
