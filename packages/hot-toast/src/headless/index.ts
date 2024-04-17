import { toast } from '../core/toast';

export type {
  DefaultToastOptions,
  IconTheme,
  Renderable,
  Toast,
  ToasterProps,
  ToastOptions,
  ToastPosition,
  ToastType,
  ValueFunction,
  ValueOrFunction,
} from '../core/types';

export { resolveValue } from '../core/utils';
export { useToaster } from '../core/useToaster';
export { useStore as useToasterStore } from '../core/store';
export { ToastProvider } from '../core/context'
export { create } from '../core/create'

export { toast };
export default toast;
