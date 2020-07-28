let createError = require('http-errors');

exports.isLoggedIn =

    function(req,res,next){
        if(req.user) {
            next();
        } else{
            next(createError(404, 'page does not exists'));
        }
    }
;

exports.hasAuth = function(req, res, next){
    if (req.user && req.user.is_admin == true) {
        next();
    } else {
        next(createError(404, 'Has no auth'))
    }
}