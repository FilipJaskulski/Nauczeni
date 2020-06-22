const coach = require('../models/coach');
const { authenticate } = require('../util/database');
const Coach = require('../models/coach');
const Discipline = require('../models/discipline');
const Klient = require('../models/klient');
const Trening = require('../models/trening');
const Address = require('../models/adress');

exports.fetchForAddAppoitment = (req, res, next) => {
let auth = false;
if (req.isAutenthicated()) {
    auth = true;
} 
if (req.user.role === "admin") {
    coachProfile.findAll({ include: [{ model: Klient }] }).then(coaches => {
      res.render("add-trening", {
        coaches: coaches,
        role: req.user.role,
        auth: auth,
        pageTitle: "Dodaj trening"
      });
    });
  } else {
    res.status(403).redirect("/forbidden");
  }
}
exports.fetchAllCoaches = (req, res, next) => {
    let auth = false;
    if (req.isAutenthicated()) {
        auth = true;
        role = req.user.role;
    }
Coach.getCoachProfiles({
    where: {disciplineId: req.query.dicsipline },
    include: [{model: coach}, {model: Discipline}]
})
.then(coaches => {
    if(coaches.lenght > 0){
        res.render('coaches-list'), {
            coaches: coaches,
            auth: auth,
            role: role,
            pageTitle: "Trenerzy"
        }}else {
            res.redirect('/no-coaches');
        }
    })
    .catch(err => console.log(err));
};

exports.postAddProfile = (req, res, next) => {
    Coach.create({
        name: req.body.name,
        discpline: req.body.discipline
    })
    .then(result => { 
        res.redirect('/add-coach');
    })
    .catch(err => {
        console.log('coach not created');
        console.log(err);
    }); 
    };

    exports.postAddKlient = (req, res, next) => {
        Klient.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
           // password: req.body.password,
           // last_login: req.bdoy.last_login,
           // status: req.body.status,
           // role: req.body.role
        })
        .then(result => {
            res.redirect('/add-klient');
        })
        .catch(err => {
            console.log('klient not created');
            console.log(err);
        })
    }
    exports.postAddTrening = (req, res, next) => {
        Trening.create({
            date_time: req.body.date_time,
            coach: req.body.coach,
            dicsipline: req.body.discipline
        })
        .then(result => {
            res.redirect('/add-trening')
        })
        .catch(err => {
            console.log('trening not created');
            console.log(err);
        })
    }
    exports.postAddAdress = (req, res, next) => {
        Address.create({
            country: req.body.country,
            city: req.body.city,
            postalcode: req.body.postalcode,
            street: req.body.street,
            buildingnumber: req.body.buildingnumber
        })
        .then(result => {
            res.redirect('/add-adress')
        })
        .catch(err => {
            console.log('adress not created');
            console.log(err);
        })
    }