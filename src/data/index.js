export const typesDialog = {
    'Пользователь': 'user',
    'Модератор': 'moderator',
    'Заказ': 'order',
    'Поддержка': 'support'
};
export const messages = [
    {
        "id": 1,
        'chatId': 1,
        "text": "Но разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях форм воздействия.",
        "user": "Домников Сергей",
        "incoming": true,
        "date": new Date(),
    },
    {
        "id": 2,
        'chatId': 2,
        "text": "Но разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях форм воздействия.",
        "user": "Домников Сергей",
        "incoming": true,
        "date": new Date(),
    },
    ,
    {
        "id": 3,
        'chatId': 2,
        "text": "Но разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях форм воздействия.",
        "user": "Толкачев Владислав",
        "incoming": true,
        "date": new Date(),
    }
];

export const setMessage = (message) => {
    messages.push(message);
}
export const dialogs = [
    {
        id: 1,
        img: "123",
        name: "Домников Сергей",
        lastMessage: {
            date: new Date(2022, 9, 24, 18, 30),
            text: 'Но разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях форм воздействия.',
            user: 'Домников Сергей'
        },
        unReadCount: 1,
        typeDialog: "user",
        additionalInfo: {
            numOrder: null
        },
        archiveDialog: false,
        fixedDialog: false,
        users: ['u1']
    },
    {
        id: 2,
        img: "123",
        name: "Заказ №123",
        lastMessage: {
            date: new Date(2022, 10, 1),
            text: 'Но разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях форм воздействия."',
            user: 'Домников Сергей'
        },
        unReadCount: 0,
        typeDialog: "order",
        additionalInfo: {
            numOrder: 123
        },
        archiveDialog: false,
        fixedDialog: false,
        users: ['u1', 'u3', 'u5']
    }
];
export const users = [
    { id: 'u1', sort: 2, img: require('@/assets/images/tehSupport.svg'), name: 'Домников Сергей', type: 'user' },
    { id: 'u2', sort: 1, img: require('@/assets/images/tehSupport.svg'), name: 'Иванов Сергей', type: 'contact' },
    { id: 'u3', sort: 1, img: require('@/assets/images/tehSupport.svg'), name: 'Толкачев Владислав', type: 'contact' },
    { id: 'u4', sort: 2, img: require('@/assets/images/tehSupport.svg'), name: 'Турсунов Михаил', type: 'user' },
    { id: 'u5', sort: 1, img: require('@/assets/images/tehSupport.svg'), name: 'Григорьев Евгений', type: 'contact' },
    { id: 'u6', sort: 2, img: require('@/assets/images/tehSupport.svg'), name: 'Петров Андрей', type: 'user' },
    { id: 'u7', sort: 1, img: require('@/assets/images/tehSupport.svg'), name: 'Алексеев Игорь', type: 'contact' },
    { id: 'u8', sort: 1, img: require('@/assets/images/tehSupport.svg'), name: 'Мкртычан Валерия', type: 'contact' },
    { id: 'u9', sort: 2, img: require('@/assets/images/tehSupport.svg'), name: 'Андронова Валентина', type: 'user' },
    { id: 'u10', sort: 1, img: require('@/assets/images/tehSupport.svg'), name: 'Алина Екатерина', type: 'contact' }
];
export const orders = [
    { id: 'o1', name: 'Заказ №127345', num: 127345 },
    { id: 'o2', name: 'Заказ №299784', num: 299784 },
    { id: 'o3', name: 'Заказ №367483', num: 367483 },
    { id: 'o4', name: 'Заказ №192032', num: 192032 },
    { id: 'o5', name: 'Заказ №393027', num: 393027 },
    { id: 'o6', name: 'Заказ №940383', num: 940383 },
    { id: 'o7', name: 'Заказ №628492', num: 628492 },
    { id: 'o8', name: 'Заказ №112925', num: 112925 },
    { id: 'o9', name: 'Заказ №111122', num: 111122 },
    { id: 'o10', name: 'Заказ №573892', num: 573892 },
];