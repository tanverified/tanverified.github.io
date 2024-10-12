import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getBrandIcon } from 'src/utils/icons';

describe('getBrandIcon', () => {
  test('should return correct icon for a known network', () => {
    const icon = getBrandIcon('GitHub', faUser);
    expect(icon).toEqual(faGithub);
  });

  test('should return fallback icon for an unknown network', () => {
    const icon = getBrandIcon('NotValidNetwork', faUser);
    expect(icon).toEqual(faUser);
  });
});
