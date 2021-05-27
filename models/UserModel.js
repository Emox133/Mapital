const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator');

const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Molimo vas unesite vaše ime.']
    },
    lastName: {
        type: String,
        required: [true, 'Molimo vas unesite vaše prezime.']
    },
    email: {
        type: String,
        required: [true, 'Molimo vas unesite vaš E-mail.'],
        unique: true,
        validate: {
            validator: function() {
                return validator.isEmail(this.email)
            },
            message: 'Molimo vas unesite validan format E-maila.'
        }
    },
    password: {
        type: String,
        required: [true, 'Molimo vas unesite vašu lozinku.'],
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Molimo vas potvrdite vašu lozinku.'],
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'Lozinke se ne podudaraju.'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

usersSchema.pre('save', async function(next) {
    // 1) Check if the password is actually modified
    if(!this.isModified('password')) return next()

    // 2) Hash the password with the cost of 12
    this.password = await bcrypt.hash(this.password, 12)

    // 3) Before saving to DB set confirm password to undefined
    this.confirmPassword = undefined

    next()
})

usersSchema.methods.comparePasswords = async function(userPassword, candidatePassword) {
    return await bcrypt.compare(userPassword, candidatePassword)
};

const User = mongoose.model('User', usersSchema)

module.exports = User