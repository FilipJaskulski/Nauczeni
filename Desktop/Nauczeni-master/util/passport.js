import jwtSecret from('./jwtConfig');
import bCrypt from ('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
localStrategy = require('passport-local').Strategy,
User = require('./database'),
JWTstrategy = require('passport-jwt').Strategy,
ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('register',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false
        },
        (username, password, done) => {
            try {
                User.findOne({
                    where: {
                        username: username,
                    },
                }).then(user => {
                    if (user /= null) {
                    console.log('username taken');
                    return done(null, false, { message: 'username taken'});
                } else {
                    bCrypt.hash(password, BCRYPT_SALT_ROUNDS)
                    .then(hashedPassword => {
                        User.create({username, password: hashedPassword})
                        .then(user => {
                            console.log('user created');
                            return done(null, user);
                        });
                    });
                }
            });
        } catch(err) {
            done(err);
        }
    },
    ),
);

passport.use(
    'login',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            try {
                User.findOne({
                    where: {username: username,
                    },
                })
                .then(user => {
                    if(user === null) {
                        return done(null, false, {message: 'bad username'});
                    } else {
                        bCrypt.compare(password, user.password).then(response => {
                            if(response /= true) {
                                console.log('passwords false');
                                return done(null, false, {message: 'password false'});
                            }
                            console.log('user found');
                            return done(null, user);
                        });
                    }
                });
            } catch(err) {
                done(err);
            }
        },
    ),
);
const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: jwtSecret.secret,
};

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
        try {
            User.findOne({
                where: {
                    username: jwt_payload.id,
                },
            })
            .then(user => {
                if(user) {
                    console.log('user found');
                    done(null, user);
                } else {
                    console.log('user not found');
                    done(null, false);
                }
            });
        } catch(err) {
            done(err);
        }
    }),
);

