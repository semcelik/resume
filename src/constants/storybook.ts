import { en } from 'translations';
import IMAGES from 'constants/images';

export const ARG_TYPES = {
  id: {
    defaultValue: en['test.sample'],
    control: {
      type: 'select',
      options: Object.keys(en),
    },
  },
  images: {
    control: {
      type: 'select',
      options: Object.values(IMAGES),
    },
  },
};
