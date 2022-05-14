declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export interface GlobalComponents {
    // IconPicker: typeof import('../src/components/Icon/src/IconPicker.vue')['default'];
    SvgIcon: typeof import('../src/components/Icon/src/SvgIcon.vue')['default'];
  }

  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
