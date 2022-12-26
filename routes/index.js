var express = require('express');
var router = express.Router();


// this is how we use the Contact class from models
const Contact = require('../models/contact.js');

// using a contactlist module to handle a contact list
const db = require('../models/contactlist.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  const newId = db.getContacts().length + 1;
  let newContact = new Contact(newId, 'John', 'Doe', '555-555-5555');
  // example of using the contactlist module
  db.addContact(newContact);
  console.log(db.getContacts());
  res.send(`Contact list is now ${db.getContacts().length} contacts long. Reload this page and check the server console for details.`);
  res.end();

  // the default index.html in public folder was deleted to be replaced with this route
  // res.render('index', { title: 'Express' });
});

module.exports = router;
