import faker from 'faker'

export var generateMessages = (numberOfUsers) => {
    var users = generateUsers(numberOfUsers)

    var messages = [];

    var messagesQuantitity = Math.floor(Math.random()*50)
  


   for(var i=1; i<=messagesQuantitity; i++){
        messages.push({
            author: randomComponent(users),
            timeStamp: JSON.stringify(faker.date.past()),
            message: faker.lorem.words(1 + Math.floor(Math.random()*10))
        })
   }

    return {users, messages}
     
}

function randomComponent (array){
    var randomIndex = Math.floor(Math.random()*array.length);

    return array[randomIndex]
} 


function generateUsers(quantity) {

        var users = [];

        for (var i = 1; i <= quantity; i++) {
            users.push({
                _id: faker.random.uuid(),
                image: faker.image.avatar()
            })
        }

        return users;
    }
