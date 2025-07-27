import { toast } from 'sonner';

export const success = (message: (string)) =>
    toast.success(message, {
        unstyled: true,
        className: 'text-success-fg1-default bg-success-bg1-default h-11 rounded-3 py-3 px-4',
        icon: null,
    });