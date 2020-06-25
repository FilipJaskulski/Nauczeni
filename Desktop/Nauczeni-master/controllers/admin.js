const coach = require("../models/coach");
const { authenticate } = require("../util/database");
const Coach = require("../models/coach");
const Discipline = require("../models/discipline");
const User = require("../models/user");
const Training = require("../models/training");
const Address = require("../models/adress");

exports.fetchForAddAppoitment = (req, res, next) => {
  let auth = false;
  if (req.isAutenthicated()) {
    auth = true;
  }
  if (req.user.role === "admin") {
    coachProfile.findAll({ include: [{ model: User }] }).then((coaches) => {
      res.render("add-training", {
        coaches: coaches,
        role: req.user.role,
        dicsipline: discpline,
        auth: auth,
        date_time: date_time,
        pageTitle: "Add training",
      });
    });
  } else {
    res.status(403).redirect("/forbidden");
  }
};
exports.fetchAllCoaches = (req, res, next) => {
  let auth = false;
  if (req.isAutenthicated()) {
    auth = true;
    role = req.user.role;
  }
  Coach.getCoachProfiles({
    where: { disciplineId: req.query.dicsipline },
    include: [{ model: coach }, { model: Discipline }],
  })
    .then((coaches) => {
      if (coaches.lenght > 0) {
        res.render("coaches-list"),
          {
            coaches: coaches,
            auth: auth,
            role: role,
            pageTitle: "Coaches",
          };
      } else {
        res.redirect("/no-coaches");
      }
    })
    .catch((err) => console.log(err));
};

exports.postAddProfile = (req, res, next) => {
  let auth = false;
  if (req.isAutenthicated()) {
    auth = true;
    role = req.user.role;
  }
  Coach.create({
    name: req.body.name,
    discpline: req.body.discipline,
  })
    .then((result) => {
      res.redirect("/add-coach");
    })
    .catch((err) => {
      console.log("coach not created");
      console.log(err);
    });
};

exports.postAddUser = (req, res, next) => {
  let auth = false;
  if (req.isAutenthicated()) {
    auth = true;
    role = req.user.role;
  }
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  })
    .then((result) => {
      res.redirect("/add-user");
    })
    .catch((err) => {
      console.log("user not created");
      console.log(err);
    });
};
exports.postAddAdress = (req, res, next) => {
  let auth = false;
  if (req.isAutenthicated()) {
    auth = true;
    role = req.user.role;
  }
  Address.create({
    country: req.body.country,
    city: req.body.city,
    postalcode: req.body.postalcode,
    street: req.body.street,
    buildingnumber: req.body.buildingnumber,
  })
    .then((result) => {
      res.redirect("/add-adress");
    })
    .catch((err) => {
      console.log("adress not created");
      console.log(err);
    });
};
exports.fetchAllCoachesAge =
  (req,
  res,
  (next) => {
    let auth = fasle;
    if (req.isAutenthicated()) {
      auth = true;
      role = req.user.role;
    }
    Coach.findAll(
      req.query.date_time.then((coaches) => {
        coaches
          .getCoachesAge({
            where: { age: req.query.date_time },
            include: { model: Coach },
          })
          .then((coaches) => {
            if (age.lenght > 0) {
              res.render("age-coaches"),
                {
                  name: name,
                  age: age,
                  pageTitle: "Age of coaches",
                };
            } else {
              res.redirect("/no-coaches-age");
            }
          })
          .catch((err) => console.log(err));
      })
    );
  });
