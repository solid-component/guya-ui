import { Store, createStore, unwrap } from "solid-js/store";

export function useRef<T extends object = {}>(
  ...[store, options]: {} extends T
    ? [store?: T | Store<T>, options?: { name?: string }]
    : [store: T | Store<T>, options?: { name?: string }]
) {
  const unwrappedStore = unwrap((store || {}) as T);
  const proxy = new Proxy(unwrappedStore, {
    get(target, prop) {
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log("代理");
      return Reflect.set(target, prop, value);
    },
  });
  return proxy;
}
