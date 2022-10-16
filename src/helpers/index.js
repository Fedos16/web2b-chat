export const timeFormat = (date) => {
    return new Date(date).toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });
}
export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('ru-RU');
}