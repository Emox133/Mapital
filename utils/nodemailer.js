const nodemailer = require('nodemailer')
const {sendEmailTo} = require('./SendgridTransport')

class Email {
    constructor(event) {
        this.event = event
        this.from = event.email;
        this.to = sendEmailTo(event).emailTo
    }

    newTransport() {
        const {sendgridPassword} = sendEmailTo(this.event)
        return nodemailer.createTransport({
            service: 'SendGrid',
            auth: {
                user: process.env.SENDGRID_USER,
                pass: sendgridPassword
            }
        })
    }

    async send (subject) {
        const emailOptions = {
            from: this.from,
            to: this.to,
            subject,
            text: `Opis: ${this.event.description} Pošiljaoc: ${this.event.sender} Fotografija: ${this.event.image ? this.event.image : 'Pošiljaoc nije dodao fotografiju.'}`
        }

        await this.newTransport().sendMail(emailOptions, (err, info) => {
            if(err) console.log(err)
            console.log(info)
        })
    }
}

module.exports = Email