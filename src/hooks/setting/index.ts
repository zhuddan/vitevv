import { GlobConfig } from '#/config';

import packageInfo from '../../../package.json';

const env = process.env as any;

export function useGlobSetting() {
  const globSettings: GlobConfig = {
    VERSION: packageInfo.version,
    APP_NAME: env.VUE_APP_APP_NAME,
    API_BASE_URL: env.VUE_APP_API_BASE_URL,
    URL_PREFIX: env.VUE_APP_URL_PREFIX || '',
  };

  return globSettings;
}
