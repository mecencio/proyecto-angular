import { TitlesStyleDirective } from './titles-style.directive';

describe('TitlesStyleDirective', () => {
  it('should create an instance', () => {
    const directive = new TitlesStyleDirective('Hola Mundo');
    expect(directive).toBeTruthy();
  });
});
