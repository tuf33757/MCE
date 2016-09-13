// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.sendFile('/index.html', { root: __dirname }); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/TeacherLogin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendFile('partials/TeacherLogin.html', { root: __dirname }, { message: req.flash('loginMessage') }); 
    });

 app.get('/studentLogin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendFile('partials/studentLogin.html', { root: __dirname }, { message: req.flash('loginMessage') }); 
    });

app.get('/landingPage', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendFile('partials/landingPage.html' , { root: __dirname }); 
    });


    app.get('/transaction', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendFile('partials/transaction.html' , { root: __dirname }); 
    });

   /*// process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}; */

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
};