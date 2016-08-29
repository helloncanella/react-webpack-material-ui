import faker from 'faker'
import { randomComponent, generateUsers } from '../helperFunctions/helperFunctions'


function generateMeetings (quantity) {

    let meetings = []

    let instructors = generateUsers(4);


    for (var i = 1; i <= quantity; i++) {
        var randomDate = randomMeetingTime()

        meetings.push({
            _id: faker.random.uuid(),
            instructor: randomComponent(instructors),
            subject: randomComponent(['Física', 'Cálculo']),
            start: randomDate.start,
            end: randomDate.end,
            value: faker.commerce.price(),
            address: faker.address.streetAddress(),
            scheduledAt: JSON.stringify(faker.date.past()),
            additionalDetails: faker.lorem.text(15),
            themes: [
                "Teorema fundamental da carga",
                "Lei zero da termodinâmica",
                "Média e mediatriz",
                "Segunda lei da termodinâmica"
            ]
        })

    }


    return meetings

}



export default generateMeetings



function randomMeetingTime() {

    var start

    var d1 = start = faker.date.future();
    var d2 = new Date(d1)

    var end = new Date(d2.setHours(d1.getHours() + 1 + Math.floor(Math.random() * 3)));

    return {
        start: JSON.stringify(start),
        end: JSON.stringify(end)
    }
}


