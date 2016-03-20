'use strict';

module.exports = function checkHttps(req, res, next){
  if(req.get('x-forwarded-proto') && req.get('x-forwarded-proto') !== "https") {
    res.set('x-forwarded-proto', 'https');
    res.redirect('https://' + req.get('host') + req.url);
  }
  else {
    next();
  }
};