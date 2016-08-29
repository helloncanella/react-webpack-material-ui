import faker from 'faker'
import moment from 'moment'

export var randomComponent =  (array) => {
    var randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex]
} 

export var generateUsers = (quantity) => {

    var users = [];

    for (var i = 1; i <= quantity; i++) {
        users.push({
            _id: faker.random.uuid(),
            image: faker.image.avatar(),
            name: faker.name.findName()
        })
    }

    return users;
}

export var parseDate = (stringDate) => {
    
    let locale = 'pt-BR'

    //removing double quotes    
    stringDate = stringDate.replace("\"", "")

    var momentWrapper = moment(stringDate).locale(locale)

    return {
        week: momentWrapper.format('dd'),
        day: momentWrapper.format('DD/MM'),
        hour: momentWrapper.format('HH:mm')
    } 

} 