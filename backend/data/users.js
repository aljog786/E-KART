import bcrypt from 'bcryptjs';

const user = [
    {
        nane: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('111111',10),
        isAdmin: true
    },
    {
        nane: 'abc d',
        email: 'abcd@email.com',
        password: bcrypt.hashSync('333333',10),
        isAdmin: false
    },
    {
        nane: 'mno p',
        email: 'mnop@email.com',
        password: bcrypt.hashSync('666666',10),
        isAdmin: false
    }
];

export  default users;