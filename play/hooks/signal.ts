
let Listener: any = null;


export function readSignal(this: any) {
  return this.value
}

export function writeSignal(node: any, value: any) {
    let current = node.value;
}

export function runUpdates<T>(fn: () => T) {
    const res = fn();
}

export function createRoot(fn: any) {
   const updateFn = fn
   runUpdates(updateFn)
}

export function createSignal<T>(value?: T) {
  const s = {
    value,
    observers: null,
    observerSlots: null,
  };
  const setter = (value?: unknown) => {
    writeSignal(s, value)
  };
  return [readSignal.bind(s), setter];
}
