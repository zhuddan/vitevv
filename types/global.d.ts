import type { PropType as VuePropType } from 'vue';
declare global {
  interface VEvent extends Event {
    target: HTMLInputElement;
  }

  type PropType<T> = VuePropType<T>;

  type IntervalHandle = ReturnType<typeof setInterval>;

  type TimeoutHandle = ReturnType<typeof setTimeout>;

  interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }

  interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
  }

  type Nullable<T> = T | null;

  type Recordable<T = any> = Record<string, T>;

  type TreeItem<T> = T & {
    children?: TreeItem<T>[];
  };

  type TreeList<T> = TreeItem<T>[];

  type callback = Fn<DOMHighResTimeStamp, void>;

  type TargetContext = '_self' | '_blank';
}
