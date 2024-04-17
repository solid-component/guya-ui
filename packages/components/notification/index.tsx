import { create, Toaster, ToastProvider } from "solid-hot-toast";
import { createRoot } from "solid-js";
import { Portal } from "solid-js/web";

const context = create({
  limit: 20,
});

export const Notification = () => {
  return (
    <ToastProvider {...context}>
      <Toaster position={() => "top-right"} />
    </ToastProvider>
  );
};

let instance = null;

const genInstance = () => {
  if (instance) {
    return;
  }
  createRoot(() => {
    instance = (
      <Portal>
        <Notification />
      </Portal>
    );
  });
};

const notification: typeof context.toast = (...args) => {
  genInstance();
  return context.toast(...args);
};
notification.success = (...args) => {
  genInstance();
  return context.toast.success(...args);
};
notification.error = (...args) => {
  genInstance();
  return context.toast.error(...args);
};
notification.promise = (...args) => {
  genInstance();
  return context.toast.promise(...args);
}
notification.dismiss = (...args) => {
  genInstance();
  return context.toast.dismiss(...args);
}
notification.loading = (...args) => {
  genInstance();
  return context.toast.loading(...args);
}
notification.custom = (...args) => {
  genInstance();
  return context.toast.custom(...args);
}
notification.remove = (...args) => {
  genInstance();
  return context.toast.remove(...args);
}


export { notification };
