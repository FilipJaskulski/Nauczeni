const adress = require('../models/adress');
const coach = require('../models/coach');
const trening = require('../models/trening');
const { authenticate } = require('../util/database');
const Coach = require('../models/coach');
const Discipline = require('../models/dyscyplina');
const Klient = require('../models/klient');

exports.fetchForAddAppoitment(req, res, next) => {
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
exports.fetchAllCoaches(req, res, next) => {
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
        }}})}; 