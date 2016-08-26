import * as faker from 'faker'

export interface InstructorData {
    personalData: User, 
    professionalData: Instructor 
}

export function generateInstructor(): InstructorData {

    var
        personalData: User,
        professionalData: Instructor


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
                degree: faker.name.title(),
                area: faker.lorem.words(2),
                university: faker.company.companyName(),
                start: 1970,
                end: 1970 + Math.floor(Math.random() * 6)
            },
            {
                degree: faker.name.title(),
                area: faker.lorem.words(2),
                university: faker.company.companyName(),
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
        subjects: ['PHYSICS', 'CALCULUS'],
        personalDescription: faker.lorem.words(40)

    }



    return { personalData, professionalData }
}

