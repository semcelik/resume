export const NOOP: () => void = () => {};

export enum HrefType {
  https = 'https://',
  mail = 'mailto:',
}

export const IS_DEV = process.env.NODE_ENV === 'development';
