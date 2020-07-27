let validator = require('validator');
let models = require('../models')

const validateCreateUserFields = function(errors, req) {
    if (!validator.isEmail(req.body.email)) {
        errors["email"] = "Please use a valid email";
    }

    if (!validator.isAscii(req.body.password)) {
        errors["password"] = "Invalid chars in pass";
    }

    if (!validator.isLength(req.body.password, {min: 8, max: 25})) {
        errors["password"] = "Min 8, max 25";
    }
}

exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject){
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email
            } 
        }).then(u => {
            if (u !== null) {
                errors["email"] = "Email is already in use";
            }
            resolve(errors);
        })
    })

}