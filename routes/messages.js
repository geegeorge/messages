'use strict';

const express = require('express');
const knex = require('../knex')
const router = express.Router();

router.get('/', (req, res, next) => {
  knex('messages')
    .select(['id', 'name', 'message'])
    .orderBy('id')
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      next(err);
    });
});


router.get('/:id', (req, res, next) => {
  knex('messages')
    .select(['id', 'name', 'message'])
    .where('id', req.params.id)
    .then((message) => {
      res.send(message[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
  knex('messages')
    .where('id', req.params.id)
    .del()
    .returning(['id', 'name', 'message'])
    .then((message) => {
      res.json(message[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  knex('messages')
    .returning(['name', 'message'])
    .insert({
      name: req.body.name,
      message: req.body.message
    })
    .then((messages) => {
      res.send(messages[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/:id', (req, res, next) => {
    knex('messages')
      .update({
        message: req.body.message,
        name: req.body.name
      }, '*')
      .returning(['id', 'name', 'message'])
      .where('id', req.params.id)
  .then((messages) => {
    res.send(messages[0]);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
