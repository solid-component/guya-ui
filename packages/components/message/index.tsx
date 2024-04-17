import { create, Toaster, ToastProvider } from "solid-hot-toast";
import { createRoot } from "solid-js";
import { Portal } from "solid-js/web";

const context = create({
  limit: 20,
});

export const Message = () => {
  return (
    <ToastProvider {...context}>
      <Toaster position={() => "top-center"} />
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
        <Message />
      </Portal>
    );
  });
};

const message: typeof context.toast = (...args) => {
  genInstance();
  return context.toast(...args);
};
message.success = (...args) => {
  genInstance();
  return context.toast.success(...args);
};
message.error = (...args) => {
  genInstance();
  return context.toast.error(...args);
};
message.promise = (...args) => {
  genInstance();
  return context.toast.promise(...args);
}
message.dismiss = (...args) => {
  genInstance();
  return context.toast.dismiss(...args);
}
message.loading = (...args) => {
  genInstance();
  return context.toast.loading(...args);
}
message.custom = (...args) => {
  genInstance();
  return context.toast.custom(...args);
}
message.remove = (...args) => {
  genInstance();
  return context.toast.remove(...args);
}


export { message };
