import { typesDialog } from '@/data/index';

export const timeFormat = (date) => {
    return new Date(date).toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });
}
export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('ru-RU');
}
export const dateTitleChat = (date) => {
    const days = dateDifference(new Date(), date);
    
    if (days < 1) return 'Сегодня';

    return new Date(date).toLocaleDateString('ru-RU', { dateStyle: 'full' })
}
export const dateDifference = (endDate, startDate) => {
    return (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
}
export const formatingDateTime = (date) => {
    const now = new Date();
    date = new Date(date);
    const isToday = now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth() && now.getDate() === date.getDate();

    if (isToday) return timeFormat(date);
    return dateFormat(date);

}
export const formatingText = (sourceText, text) => {

    const regex = new RegExp(text, 'i');

    const index = sourceText.toLowerCase().indexOf(text.toLowerCase());
    const partText = sourceText.substring(index, index + text.length);

    const newText = sourceText.replace(regex, `<span class="finded-text-format">${partText}</span>`);

    return newText;

}
export const setTypeDialog = (dialog) => {
    return {
        [typesDialog['Пользователь']]: 'Пользователь',
        [typesDialog['Модератор']]: `Заказ №${dialog?.additionalInfo?.numOrder}`,
        [typesDialog['Заказ']]: `Групповой чат по заказу №${dialog?.additionalInfo?.numOrder}`,
        [typesDialog['Поддержка']]: ''
    }[dialog?.typeDialog]
}