const mongoose = require('mongoose');
const { MilitaryPerson } = require('./models/militaryPerson');

const MONGODB_URI = 'mongodb://localhost:27017/military_db';

const militaryPersonnel = [
    {
        firstName: "Олександр",
        lastName: "Коваленко",
        rank: "Полковник",
        personalNumber: "UA001",
        unit: "72-га окрема механізована бригада",
        position: "Командир бригади",
        dateOfBirth: "1975-03-15",
        isActive: true
    },
    {
        firstName: "Ірина",
        lastName: "Петренко",
        rank: "Працівник ЗСУ",
        personalNumber: "UA002",
        unit: "Військовий госпіталь",
        position: "Головна медсестра",
        dateOfBirth: "1982-07-22",
        isActive: true
    },
    {
        firstName: "Максим",
        lastName: "Іваненко",
        rank: "Капітан",
        personalNumber: "UA003",
        unit: "95-та десантно-штурмова бригада",
        position: "Командир роти",
        dateOfBirth: "1988-11-30",
        isActive: true
    },
    {
        firstName: "Андрій",
        lastName: "Мельник",
        rank: "Старший лейтенант",
        personalNumber: "UA004",
        unit: "24-та окрема механізована бригада",
        position: "Командир взводу",
        dateOfBirth: "1992-04-18",
        isActive: true
    },
    {
        firstName: "Наталія",
        lastName: "Ковальчук",
        rank: "Майор",
        personalNumber: "UA005",
        unit: "Генеральний штаб ЗСУ",
        position: "Начальник відділу",
        dateOfBirth: "1980-09-25",
        isActive: true
    },
    {
        firstName: "Василь",
        lastName: "Григоренко",
        rank: "Сержант",
        personalNumber: "UA006",
        unit: "128-ма гірсько-штурмова бригада",
        position: "Командир відділення",
        dateOfBirth: "1995-01-12",
        isActive: true
    },
    {
        firstName: "Олена",
        lastName: "Савченко",
        rank: "Працівник ЗСУ",
        personalNumber: "UA007",
        unit: "Центр забезпечення",
        position: "Бухгалтер",
        dateOfBirth: "1985-06-08",
        isActive: true
    },
    {
        firstName: "Дмитро",
        lastName: "Шевченко",
        rank: "Підполковник",
        personalNumber: "UA008",
        unit: "36-та окрема бригада морської піхоти",
        position: "Заступник командира бригади",
        dateOfBirth: "1978-12-03",
        isActive: true
    },
    {
        firstName: "Юлія",
        lastName: "Романенко",
        rank: "Лейтенант",
        personalNumber: "UA009",
        unit: "Військовий інститут телекомунікацій",
        position: "Викладач",
        dateOfBirth: "1990-08-17",
        isActive: true
    },
    {
        firstName: "Сергій",
        lastName: "Данилюк",
        rank: "Старший сержант",
        personalNumber: "UA010",
        unit: "92-га окрема механізована бригада",
        position: "Технік",
        dateOfBirth: "1993-05-29",
        isActive: true
    },
    {
        firstName: "Марія",
        lastName: "Литвиненко",
        rank: "Молодший лейтенант",
        personalNumber: "UA011",
        unit: "Військова прокуратура",
        position: "Юрисконсульт",
        dateOfBirth: "1994-02-14",
        isActive: true
    },
    {
        firstName: "Віталій",
        lastName: "Кравчук",
        rank: "Генерал",
        personalNumber: "UA012",
        unit: "Генеральний штаб ЗСУ",
        position: "Начальник управління",
        dateOfBirth: "1970-10-05",
        isActive: true
    },
    {
        firstName: "Тетяна",
        lastName: "Бондаренко",
        rank: "Працівник ЗСУ",
        personalNumber: "UA013",
        unit: "Військовий госпіталь",
        position: "Психолог",
        dateOfBirth: "1987-03-28",
        isActive: true
    },
    {
        firstName: "Ігор",
        lastName: "Пономаренко",
        rank: "Капітан",
        personalNumber: "UA014",
        unit: "15-й полк спеціального призначення",
        position: "Командир групи",
        dateOfBirth: "1989-07-11",
        isActive: true
    },
    {
        firstName: "Оксана",
        lastName: "Василенко",
        rank: "Сержант",
        personalNumber: "UA015",
        unit: "Навчальний центр",
        position: "Інструктор",
        dateOfBirth: "1991-12-20",
        isActive: true
    },
    {
        firstName: "Роман",
        lastName: "Ткаченко",
        rank: "Майор",
        personalNumber: "UA016",
        unit: "101-ша бригада охорони",
        position: "Начальник штабу",
        dateOfBirth: "1983-09-07",
        isActive: true
    },
    {
        firstName: "Людмила",
        lastName: "Захарченко",
        rank: "Працівник ЗСУ",
        personalNumber: "UA017",
        unit: "Центр забезпечення",
        position: "Діловод",
        dateOfBirth: "1986-04-15",
        isActive: true
    },
    {
        firstName: "Павло",
        lastName: "Марченко",
        rank: "Полковник",
        personalNumber: "UA018",
        unit: "199-й навчальний центр",
        position: "Начальник центру",
        dateOfBirth: "1973-11-23",
        isActive: true
    },
    {
        firstName: "Євген",
        lastName: "Лисенко",
        rank: "Старший лейтенант",
        personalNumber: "UA019",
        unit: "25-та повітрянодесантна бригада",
        position: "Заступник командира роти",
        dateOfBirth: "1990-01-31",
        isActive: true
    },
    {
        firstName: "Катерина",
        lastName: "Федоренко",
        rank: "Солдат",
        personalNumber: "UA020",
        unit: "44-та артилерійська бригада",
        position: "Оператор",
        dateOfBirth: "1997-06-19",
        isActive: true
    }
];

async function seedDatabase() {
    try {

        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB зʼєднання встановлено');

        await MilitaryPerson.deleteMany({});
        console.log('Старі дані очищено');

        await MilitaryPerson.insertMany(militaryPersonnel);
        console.log('Додано 20 записів!');

        await mongoose.disconnect();
        console.log('MongoDB зʼєднання закрито');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
