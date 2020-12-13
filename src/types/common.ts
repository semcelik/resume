import { ReactNode } from 'react';

import { en } from 'translations';

export type TChildrenOnly = { children?: ReactNode };

export type TI18NId = keyof typeof en;
