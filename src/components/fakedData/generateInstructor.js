import * as faker from 'faker'

export function generateInstructor(quantity) {

    var Instructors = []


    for(var i=1; i<=quantity; i++){
        Instructors.push(generate())
    }

    return Instructors;

    function generate() {

        var personalData, professionalData

        personalData = {
            _id: faker.random.uuid(),  // Meteor.userId()
            createdAt: JSON.stringify(new Date()),
            role: 'INSTRUCTOR', // instructor, admin, or client
            suspended: false,
            profile: {
                // The profile is writable by the user by default.
                name: faker.name.findName(),
                profileImageSrc: faker.image.avatar(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                university: faker.company.companyName()
            },

        }

        professionalData = {
            _id: faker.random.uuid(),
            userId: faker.random.uuid(), //Meteor UserId
            education: [
                {
                    degree: 'Graduado',
                    area: 'Engenharia Metalúrgica',
                    university: 'USP',
                    start: 1970,
                    end: 1970 + Math.floor(Math.random() * 6)
                },
                {
                    degree: 'Doutor',
                    area: 'Matemática',
                    university: 'USP',
                    start: 1970,
                    end: 1970 + Math.floor(Math.random() * 6)
                },
                {
                    degree: 'Mestre',
                    area: 'Física',
                    university: 'UFRJ',
                    start: 1970,
                    end: 1970 + Math.floor(Math.random() * 6)
                }
            ],
            plans: [
                {
                    price: faker.commerce.price(),
                    description: faker.lorem.words(4),
                    details: faker.lorem.words(40)
                },
                {
                    price: faker.commerce.price(),
                    description: faker.lorem.words(4),
                    details: faker.lorem.words(40)
                },
                {
                    price: faker.commerce.price(),
                    description: faker.lorem.words(4),
                    details: faker.lorem.words(40)
                }
            ],
            subjects: ['Cálculo', 'Física'],
            personalDescription: faker.lorem.words(40)

        


        }

        return { personalData, professionalData }

    }
}


