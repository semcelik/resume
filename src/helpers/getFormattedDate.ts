import i18n from 'i18next';
import format from 'date-fns/format';

import { DATE_LOCALE } from 'constants/locale';

type TGetFormattedDateProps = {
  dateString?: string;
  defaultValue?: string;
  dateFormat?: string;
};

function getFormattedDate({
  dateString,
  defaultValue,
  dateFormat = 'MMMM, yyyy',
}: TGetFormattedDateProps): string | undefined {
  return dateString
    ? format(new Date(dateString), dateFormat, { locale: DATE_LOCALE[i18n.language] })
    : defaultValue;
}

export default getFormattedDate;
