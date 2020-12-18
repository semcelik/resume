import i18next from 'i18next';
import format from 'date-fns/format';
import differenceInMonths from 'date-fns/differenceInMonths';

import { DATE_LOCALE } from 'constants/locale';

type TGetFormattedDateProps = {
  dateString?: string;
  defaultValue?: string;
  dateFormat?: string;
};

export function getFormattedDate({
  dateString,
  defaultValue,
  dateFormat = 'MMMM, yyyy',
}: TGetFormattedDateProps): string | undefined {
  if (dateString) {
    const date = new Date(dateString);
    return format(date, dateFormat, { locale: DATE_LOCALE[i18next.language] });
  }
  return defaultValue;
}

export function getDifferenceBetweenDates(fromDateString: string, toDateString?: string): string {
  const TOTAL_MONTHS = 12;

  const from = new Date(fromDateString);
  const to = toDateString ? new Date(toDateString) : new Date();

  const inMonths = differenceInMonths(to, from);

  if (inMonths >= TOTAL_MONTHS) {
    const count = parseFloat((inMonths / TOTAL_MONTHS).toFixed(1));
    return i18next.t('labels.years', { count });
  }
  return i18next.t('labels.months', { count: inMonths });
}
