import { RouteRecordRaw } from 'vue-router';
interface MataType {
  title: string;
}
declare global {
  interface ExtendRouteRecordRaw {
    meta: MataType;
  }
  type _VueRouteRecordRaw = RouteRecordRaw & ExtendRouteRecordRaw;
  declare type VueRouteRecordRaw = TreeItem<_VueRouteRecordRaw>;
}
