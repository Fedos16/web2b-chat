export const typesDialog = {
    'Пользователь': 'user',
    'Модератор': 'moderator',
    'Заказ': 'order',
    'Поддержка': 'support'
};
export const messages = [
    {
        id: 0,
        chatId: 1,
        text: "Я тебя понял, Олег",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(2022, 10, 12, 18, 29),
        unRead: false,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 1,
        chatId: 1,
        text: "Привет, Олег. Как дела?",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(new Date().setMinutes(new Date().getMinutes() - 10)),
        unRead: false,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 2,
        chatId: 1,
        text: "Здарова. Всё отлично, а у тебя как?",
        user: { id: 'u0', name: 'Федин Олег' },
        date: new Date(new Date().setMinutes(new Date().getMinutes() - 7)),
        unRead: false,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 3,
        chatId: 1,
        text: "Да и у меня в порядке, в принципе",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(new Date().setMinutes(new Date().getMinutes() - 3)),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 4,
        chatId: 1,
        text: "Кое-что хотел спросить, но не знаю как",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 5,
        chatId: 1,
        text: "Как принято считать, явные признаки победы институционализации неоднозначны и будут представлены в исключительно положительном свете.",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 6,
        chatId: 1,
        text: "Как уже неоднократно упомянуто, действия представителей оппозиции, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 7,
        chatId: 1,
        text: "Как уже неоднократно упомянуто, базовые сценарии поведения пользователей призывают нас к новым свершениям, которые, в свою очередь, должны быть объективно рассмотрены соответствующими инстанциями.",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 8,
        chatId: 1,
        text: "Но действия представителей оппозиции, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы.",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 9,
        chatId: 1,
        text: "Есть над чем задуматься: интерактивные прототипы описаны максимально подробно.",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
    },
    {
        id: 10,
        chatId: 1,
        text: "Но укрепление и развитие внутренней структуры, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.",
        user: { id: 'u1', name: 'Домников Сергей' },
        date: new Date(),
        unRead: true,
        attachedFiles: [],
        forwarded: []
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
            user: { id: 'u1', name: 'Домников Сергей' }
        },
        unReadCount: 1,
        typeDialog: "user",
        additionalInfo: {
            numOrder: null
        },
        archiveDialog: false,
        fixedDialog: false,
        users: ['u1'],
    },
    {
        id: 2,
        img: "123",
        name: "Заказ №123",
        lastMessage: {
            date: new Date(2022, 10, 1),
            text: 'Но разбавленное изрядной долей эмпатии, рациональное мышление говорит о возможностях форм воздействия."',
            user: { id: 'u1', name: 'Домников Сергей' }
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