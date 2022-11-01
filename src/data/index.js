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
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 2,
        'chatId': 2,
        "text": "Не следует, однако, забывать, что семантический разбор внешних противодействий однозначно фиксирует необходимость позиций, занимаемых участниками в отношении поставленных задач.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 3,
        'chatId': 3,
        "text": "Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса будут смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    },
    {
        "id": 4,
        'chatId': 4,
        "text": "С другой стороны, глубокий уровень погружения однозначно фиксирует необходимость инновационных методов управления процессами.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 5,
        'chatId': 5,
        "text": "Учитывая ключевые сценарии поведения, современная методология разработки играет определяющее значение для экономической целесообразности принимаемых решений!",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    },
    {
        "id": 6,
        'chatId': 6,
        "text": "А также тщательные исследования конкурентов неоднозначны и будут функционально разнесены на независимые элементы.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 7,
        'chatId': 1,
        "text": "Внезапно, представители современных социальных резервов призывают нас к новым свершениям, которые, в свою очередь, должны быть функционально разнесены на независимые элементы.",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    },
    {
        "id": 8,
        'chatId': 2,
        "text": "Таким образом, сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 9,
        'chatId': 3,
        "text": "Идейные соображения высшего порядка, а также синтетическое тестирование не оставляет шанса для модели развития.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    }
    ,
    {
        "id": 10,
        'chatId': 4,
        "text": "Как принято считать, тщательные исследования конкурентов ассоциативно распределены по отраслям.",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    }
];
export const dialogs = [
    {
        id: 1,
        img: "123",
        name: "Очень очень очень очень очень очень очень очень очень длинное название диалога",
        lastMessage: {
            date: new Date(2022, 9, 24, 18, 30),
            text: 'В целом, конечно, укрепление и развитие внутренней структуры позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности.',
            user: 'Олег'
        },
        unReadCount: 0,
        typeDialog: "user",
        additionalInfo: {
            numOrder: null
        },
        archiveDialog: false,
        fixedDialog: false
    },
    {
        id: 4,
        img: "123",
        name: "Заказ №12345",
        lastMessage: {
            date: new Date(),
            text: 'Привет, как дела?',
            user: 'Fedos16'
        },
        unReadCount: 0,
        typeDialog: "order",
        additionalInfo: {
            numOrder: 12345
        },
        archiveDialog: false,
        fixedDialog: false
    },
    {
        id: 2,
        img: "123",
        name: "Любовь",
        lastMessage: {
            date: new Date(2022, 9, 23, 15, 18),
            text: 'Привет, как дела?',
            user: 'Fedos16'
        },
        unReadCount: 0,
        typeDialog: "user",
        additionalInfo: {
            numOrder: 8392
        },
        archiveDialog: true,
        fixedDialog: false
    },
    {
        id: 3,
        img: "123",
        name: "Модератор",
        lastMessage: {
            date: new Date(),
            text: 'Привет, как дела?',
            user: 'Любовь'
        },
        unReadCount: 0,
        typeDialog: "moderator",
        additionalInfo: {
            numOrder: 26794
        },
        archiveDialog: false,
        fixedDialog: false
    },
    {
        id: 5,
        img: "123",
        name: "Тех. поддержка",
        lastMessage: {
            date: new Date(2022, 9, 11, 17, 46),
            text: 'Привет, как дела?',
            user: 'Fedos16'
        },
        unReadCount: 0,
        typeDialog: "support",
        additionalInfo: {
            numOrder: null
        },
        archiveDialog: false,
        fixedDialog: false
    },
    {
        id: 6,
        img: "123",
        name: "Олег",
        lastMessage: {
            date: new Date(2022, 9, 12, 17, 46),
            text: 'Привет, как дела?',
            user: 'Fedos16'
        },
        unReadCount: 0,
        typeDialog: "user",
        additionalInfo: {
            numOrder: null
        },
        archiveDialog: false,
        fixedDialog: false
    }
];
export const users = [
    { id: 'u1', sort: 2, img: require('@/assets/images/tehSupport.svg'), name: 'Олег Федин', type: 'user' },
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
    { id: 'o1', name: 'Заказ №127345' },
    { id: 'o2', name: 'Заказ №299784' },
    { id: 'o3', name: 'Заказ №367483' },
    { id: 'o4', name: 'Заказ №192032' },
    { id: 'o5', name: 'Заказ №393027' },
    { id: 'o6', name: 'Заказ №940383' },
    { id: 'o7', name: 'Заказ №628492' },
    { id: 'o8', name: 'Заказ №112925' },
    { id: 'o9', name: 'Заказ №111122' },
    { id: 'o10', name: 'Заказ №573892' },
];