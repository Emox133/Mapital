exports.sendEmailTo = (event) => {
    let emailTo, sendgridPassword

    switch(event.category) {
        case 'Komunalni': {
            emailTo = 'komunalac.mapital@gmail.com'
            sendgridPassword = process.env.KOMUNALNI_SENDGRID_PASSWORD
        }
        break;

        case 'Vodosnabdijevanje': {
            emailTo = 'vodosnabdijevanje.mapital@gmail.com'
            sendgridPassword = process.env.VODOSNABDIJEVANJE_SENDGRID_PASSWORD
        }
        break;

        case 'Saobraćaj': {
            emailTo = 'saobracaj.mapital@gmail.com'
            sendgridPassword = process.env.SAOBRACAJ_SENDGRID_PASSWORD
        }
        break;

        case 'Rasvjeta': {
            emailTo = 'rasvjeta.mapital@gmail.com'
            sendgridPassword = process.env.RASVJETA_SENDGRID_PASSWORD
        }
        break;

        default: return event;
    }

    return {
        emailTo,
        sendgridPassword
    }
}