const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Gig = require('../models/Gig');

// get all gigs
router.get('/', async (req, res) => {
  try {
    let gigs = await Gig.findAll();
    gigs = gigs.map(gig => gig.toJSON());
    res.render('gigs', {gigs} );
  } catch (err) {
    console.log(`error ${err}`)
  }
})

// display add gig form
router.get('/add', (req, res) => {
  res.render('add')
})

// add a gig
router.post('/add', async (req, res) => {
  let gig = await Gig.create(req.body)
  res.redirect('/gigs')
})

module.exports = router;