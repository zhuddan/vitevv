// app config
type DEVELOPMENT_TYPE = 'development';
type PRODUCTION_TYPE = 'production';
export type ENV_TYPE = DEVELOPMENT_TYPE | PRODUCTION_TYPE;

// 应用配置
export interface APP_CONFIG_TYPE {
  ENV: ENV_TYPE;
  // 请求地址
  API_BASE_URL: string;
  // 开发地址
  DEV_BASE_URL: string;
  // 生产地址
  PROD_BASE_URL: string;
  // 静态资源地址
  STATIC_BASE_URL: string;
  // 静态资源地址（开发地址）
  DEV_STATIC_URL: string;
  // 静态资源地址（生产地址）
  PROD_STATIC_URL: string;
  // 开发环境key
  DEVELOPMENT: DEVELOPMENT_TYPE;
  // 生产环境key
  PRODUCTION: PRODUCTION_TYPE;

  DEBUG: {
    VCONSOLE: boolean;
  };
}

interface SERVE_ITEM {
  development: string;
  production: string;
}

export interface SERVER_TYPE {
  API_BASE_URL: SERVE_ITEM;
  STATIC_BASE_URL: SERVE_ITEM;
}
export type SIDE_THEME = 'theme-dark' | 'theme-light';
// layout config
export interface LAYOUT_CONFIG_TYPE {
  title: string;
  primaryColor: string;
  sideTheme: SIDE_THEME;
  showSettings: boolean;
  topNav: boolean;
  showSidebarLogo: boolean;
  showTagsView: boolean;
  isFixedHeader: boolean;
  showSidebarLogo: boolean;
  dynamicTitle: boolean;
}
