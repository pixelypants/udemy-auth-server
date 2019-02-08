(function () {
    const mongoose = require('mongoose');
    const bcrypt = require('bcrypt-nodejs')
    const Schema = mongoose.Schema;

    const userSchema = new Schema({
        email: { type: String, unique: true, lowercase: true },
        password: String
    });

    userSchema.pre('save', function (this: any, next: any) {
        const user = this;

        bcrypt.genSalt(10, function (err: Error, salt: any) {
            if (err) { return next(err); }

            bcrypt.hash(user.password, salt, null, function (err: Error, hash: any) {
                if (err) { return next(err); }

                user.password = hash;
                next();
            })

        })
    })

    userSchema.methods.comparePasswords = function (candidatePassword: String, callback: any) {
        bcrypt.compare(candidatePassword, this.password, function (err: Error, isMatch: Boolean) {
            if (err) { return callback(err); }

            callback(null, isMatch);
        })
    }

    const ModelClass = mongoose.model('User', userSchema);
    module.exports = ModelClass;
})();