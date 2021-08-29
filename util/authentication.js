module.exports = {
    isAuthenticated : function(req, res, next) {
        if(req.isAuthenticated()) {
            next();
        }
        res.redirect('/login');
    }
}; 
