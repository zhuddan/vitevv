import { RouteRecordRaw } from 'vue-router';

declare global {
  interface ExtendRouteRecordRaw {
    meta: {
      title: string;
      // 是否白名单
      isWhite?: boolean;
      // 登录后是否禁止访问
      isRedirectWithSign?: boolean;
      // 活跃路由
      activeMenu?: string;
      // 是否隐藏
      hidden?: boolean;
    };
  }
  type _VueRouteRecordRaw = RouteRecordRaw & ExtendRouteRecordRaw;
  declare type VueRouteRecordRaw = TreeItem<_VueRouteRecordRaw>;
}
