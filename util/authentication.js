module.exports = {
    isAuthenticated : function(req, res, next) {
        if(req.isAuthenticated()) {
            next();
        }
        else {
            res.status(422).send({ 
                status: false,
                message: 'user must log in'
            });
        }
    },
    isNotAuthenticated: function(req, res, next) {
        if(!req.isAuthenticated()) {
            next();
        }
        else {
            res.status(422).send({ 
                status: false,
                message: 'user is already logged in'
            });
        }
    }
}; 
