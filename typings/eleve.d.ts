interface User {
    _id: string,  // Meteor.userId()
    createdAt: string,
    role: string, // instructor, admin, or client
    suspended: boolean,
    profile: {
        // The profile is writable by the user by default.
        name: string,
        profileImageSrc: string,
        phone: string,
        email: string,
        university?: string
    },
    notifications?: {
        tag: Array<string>,        
    }, 
    services?: Array<Object>,
    chats?: { //denormalized chat information in order to improve performance
        lastMessages: [
            {
                roomId: string,
                timeStamp: string,
                lastMessage: string,
            }
        ],
        allContacts: [
            {
                name: string,
                userId: string,
                roomId: string
            }
        ]        
        
    },
}

interface Client {
    _id: string,
    scheduled?: [
        {
            classId: number
            instructorId: Array<number>
        }
    ],

    favoriteInstructors?: [
        {
            instructorId: string
        }
    ],

    rating?: [
        {
            instructorId: string, //Instructor UserId
            value: number
        }
    ],

}

interface Instructor {
    _id: string,
    userId: string, //Meteor UserId
    boletos?: Array<Object>,
    rating?: [
        {
            clientId: string, //Meteor UserId
            value: number
        }
    ],
    education: [
        {
            degree: string,
            area: string,
            university: string,
            start: number,
            end?: number
        }
    ],
    scheduled?: [
        {
            classId: number
            clientsId: Array<number>
        }
    ],
    plans: [
        {
            price: string,
            description: string
            details: string
        }
    ],
    invoices?: {
        id: string
        status: string
    }
    subjects: Array<string>,
    personalDescription: string
}

interface Invoice {
    _id: string
    instructorId: string
    description: string
    value: number
    createdAt: string
    dueDate: string,
    identification?: string //identification generated by the invoice emitter (bank or online payment service)
    fileSrc?: string //file location
    status: string,   
}

interface Room {
    _id: string,
    participants: Array<string>, //array userId
    timeLastMessage: string, //timeStamp of lastMessage
    messages: [{
        author: string,
        timeStamp: string,
        message: string,
        file?: any
    }]
}

interface Meeting {
    _id: string,
    instructor: string,
    clients: Array<string>,
    subject: string,
    start: string,
    end: string,
    value: number,
    address: string,
    scheduledAt: string,
    additionalDetails?: string,
    themes: string
}