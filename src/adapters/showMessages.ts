import { toast } from 'react-toastify';
import { Dialog } from '../components/Dialog';

export const showMessages = {
  success: (msg: string) => toast.success(msg),
  warning: (msg: string) => toast.warning(msg),
  warn: (msg: string) => toast.warn(msg),
  error: (msg: string) => toast.error(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
  confirm: (data: string, onClosing: (confirmation: boolean) => void) =>
    toast(Dialog, {
      data,
      onClose: confirmation => {
        if (confirmation) return onClosing(true);
        return onClosing(false);
      },
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    }),
};
