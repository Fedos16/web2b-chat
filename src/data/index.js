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
        'chatId': 1,
        "text": "Учитывая ключевые сценарии поведения, современная методология разработки играет определяющее значение для экономической целесообразности принимаемых решений!",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    },
    {
        "id": 6,
        'chatId': 2,
        "text": "А также тщательные исследования конкурентов неоднозначны и будут функционально разнесены на независимые элементы.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 7,
        'chatId': 3,
        "text": "Внезапно, представители современных социальных резервов призывают нас к новым свершениям, которые, в свою очередь, должны быть функционально разнесены на независимые элементы.",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    },
    {
        "id": 8,
        'chatId': 4,
        "text": "Таким образом, сложившаяся структура организации создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса глубокомысленных рассуждений.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    },
    {
        "id": 9,
        'chatId': 1,
        "text": "Идейные соображения высшего порядка, а также синтетическое тестирование не оставляет шанса для модели развития.",
        "user": "Иванов Сергей",
        "incoming": false,
        "date": new Date(),
    }
    ,
    {
        "id": 10,
        'chatId': 2,
        "text": "Как принято считать, тщательные исследования конкурентов ассоциативно распределены по отраслям.",
        "user": "Иванов Сергей",
        "incoming": true,
        "date": new Date(),
    }
]

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
        archiveDialog: true,
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
        typeDialog: "moderator",
        additionalInfo: {
            numOrder: 8392
        },
        archiveDialog: true,
        fixedDialog: false
    },
    {
        id: 3,
        img: "123",
        name: "Евгений",
        lastMessage: {
            date: new Date(),
            text: 'Привет, как дела?',
            user: 'Любовь'
        },
        unReadCount: 0,
        typeDialog: "order",
        additionalInfo: {
            numOrder: 26794
        },
        archiveDialog: false,
        fixedDialog: false
    },
    {
        id: 4,
        img: "123",
        name: "Григорий",
        lastMessage: {
            date: new Date(2022, 9, 10, 17, 46),
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
        id: 5,
        img: "123",
        name: "Григорий5",
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
        name: "Григорий6",
        lastMessage: {
            date: new Date(2022, 9, 12, 17, 46),
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
        id: 7,
        img: "123",
        name: "Григорий7",
        lastMessage: {
            date: new Date(2022, 9, 13, 17, 46),
            text: 'Привет, как дела?',
            user: 'Fedos16'
        },
        unReadCount: 0,
        typeDialog: "support",
        additionalInfo: {
            numOrder: null
        },
        archiveDialog: false,
        fixedDialog: true
    }
]