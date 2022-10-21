export const timeFormat = (date) => {
    return new Date(date).toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });
}
export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('ru-RU');
}
export const formatingText = (sourceText, text) => {

    const regex = new RegExp(text, 'i');

    const index = sourceText.toLowerCase().indexOf(text.toLowerCase());
    const partText = sourceText.substring(index, index + text.length);

    const newText = sourceText.replace(regex, `<span class="finded-text-format">${partText}</span>`);

    return newText;

}