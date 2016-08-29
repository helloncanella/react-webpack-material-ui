import faker from 'faker'
import { randomComponent, generateUsers } from '../helperFunctions/helperFunctions'


export var generateMessages = (numberOfUsers) => {
    var users = generateUsers(numberOfUsers)

    var messages = [];

    var messagesQuantitity = Math.floor(Math.random() * 50)



    for (var i = 1; i <= messagesQuantitity; i++) {
        messages.push({
            author: randomComponent(users),
            timeStamp: JSON.stringify(faker.date.past()),
            message: faker.lorem.words(1 + Math.floor(Math.random() * 10))
        })
    }

    return { users, messages }

}




