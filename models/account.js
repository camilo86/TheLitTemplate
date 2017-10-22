var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var accountSchema = new mongoose.Schema({
  firstName: { type: mongoose.Schema.Types.String, required: true },
  lastName: { type: mongoose.Schema.Types.String, required: true },
  email: { type: mongoose.Schema.Types.String, required: true },
  password: { type: mongoose.Schema.Types.String, required: true }
});

accountSchema.pre('save', function(next) {
  var account = this;

  if(!account.isModified('password')) {
    next();
  }

  bcrypt.hash(account.password, 10, function(error, hash) {
    if(error) {
      return next(error);
    }

    account.password = hash;
    next();
  });
});

accountSchema.methods.comparePassword = function(candidate, callback) {
  bcrypt.compare(candidate, this.password, callback);
}

module.exports = mongoose.model('Account', accountSchema);