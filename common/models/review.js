module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.data = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });
};
