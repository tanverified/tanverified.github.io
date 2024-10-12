import { formatDate, formatDateRange } from 'src/utils/date';

describe('formatDate', () => {
  test('should correctly format a valid date string', () => {
    const dateStr = '2025-01-01';
    const dateFmt = formatDate(dateStr);
    expect(dateFmt).toBe('January 2025');
  });

  test('should return empty string when given an invalid date string', () => {
    const dateStr = 'NotValidDate';
    const dateFmt = formatDate(dateStr);
    expect(dateFmt).toBe('');
  });
});

describe('formatDateRange', () => {
  test('should correctly format range with two different date strings', () => {
    const dateStart = '2025-01-01';
    const dateEnd = '2025-12-01';
    const dateFmt = formatDateRange(dateStart, dateEnd);
    expect(dateFmt).toBe('January 2025 - December 2025');
  });

  test('should correctly format range with same start and end date strings', () => {
    const dateStart = '2025-01-01';
    const dateEnd = '2025-01-01';
    const dateFmt = formatDateRange(dateStart, dateEnd);
    expect(dateFmt).toBe('January 2025');
  });

  test('should correctly format range with only start date', () => {
    const dateStart = '2025-01-01';
    const dateFmt = formatDateRange(dateStart);
    expect(dateFmt).toBe('January 2025 - Present');
  });
});
