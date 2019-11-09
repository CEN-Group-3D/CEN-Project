module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if ( req.isAuthenticated() ) {
            return next();
        }
        console.log('Log in to view resource')
        req.redirect('/login');
    }
}
