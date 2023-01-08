import i18n from 'i18next';

export const translate = (
  key: string | string[],
  options: Object = {}
): string => i18n.t(key, options) as unknown as string;
