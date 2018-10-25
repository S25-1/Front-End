import { VacatureModule } from './Vacature.module';

describe('VacatureModule', () => {
  let vacatureModule: VacatureModule;

  beforeEach(() => {
    vacatureModule = new VacatureModule();
  });

  it('should create an instance', () => {
    expect(VacatureModule).toBeTruthy();
  });
});
