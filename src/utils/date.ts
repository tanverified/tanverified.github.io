export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.valueOf())) return '';

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatDateRange(startDate: string, endDate?: string): string {
  if (startDate == endDate) {
    return formatDate(startDate);
  }
  return [
    formatDate(startDate),
    endDate ? formatDate(endDate) : 'Present',
  ].join(' - ');
}
