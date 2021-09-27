//Määritellään bodyParser
const bodyParser = require('body-parser');
//Määritellään express
const express = require('express');

//Käytetään expressia
const app = express();

//Käytetään bodyParseria
app.use(bodyParser.urlencoded({ extended: true }));

//Määritellään portti jota kuunnellaan
const port = 3000;

//Asetetaan mallimoottori
app.set('view engine', 'pug');

let customers = [
    {id: '1588323375416', number:"1", firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', number:"2", firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', number:"3", firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176'},
  ]

//Haetaan asiakaslista
  app.get("/customers", (req, res) => {
    res.render("customerlist", {customers: customers});
  })

//haetaan uusi asiakas -sivu
  app.get("/addcustomer", (req, res) => {
    res.render("addcustomer");
  })
  
  //Lisätään uusi asiakas listaan
  //Ohjataan käyttäjä takaisin pääsivulle /customers
  app.post("/addcustomer", (req, res) => {
    const newCustomer = {id: new Date().now, number: req.body.number, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, phone: req.body.phone};
    customers = [...customers, newCustomer];
    res.redirect("/customers");
  })
  
//Kuunellaan porttia 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
})

