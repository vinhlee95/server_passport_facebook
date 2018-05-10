const passport = require('passport');

module.exports = (app) => {
   // redirect user to facebook authentication page
   // after user grants access, user will be
   // redirect to auth/facebook/callback
   app.get('/auth/facebook', 
      passport.authenticate('facebook', {scope: 'email'} ));

   // 
   app.get('/auth/facebook/callback',
      passport.authenticate('facebook', {
         successRedirect: '/',
         failureRedirect: '/login'
      }));
}