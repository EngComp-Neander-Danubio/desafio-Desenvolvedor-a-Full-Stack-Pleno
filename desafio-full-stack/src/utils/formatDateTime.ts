import { format } from 'date-fns';

export const formatDateTime = (data: Date | string) => {
    const dateObj = typeof data === 'string' ? new Date(data) : data;

    const date = format(dateObj, 'dd/MM/yyyy');
    const time = format(dateObj, 'HH:mm');

    return { date, time };
};
