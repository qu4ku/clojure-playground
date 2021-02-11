# Information model

## User
- id          (uuid)
- full-name   (string)
- username    (string)
- email       (string => unique)
- password    (string => hashed)
- token       (string)

## Topics
- id          (uuid)
- author      (ref)
- title       (string)
- tags        (vector of strings)

## Decks
- id          (uuid)
- author      (ref)
- title       (string)
- tags        (vector of strings)

## Cards
- id                (uuid)
- topic             (ref)
- front             (string)
- back              (string)
- progress          (long)
- next study date   (date|instant)


# HTTP rest points

## Auth
/api/login
  - POST => / login a user
/api/register
  - POST => register a user

## Users
/api/users/:user-id
  - GET     => get a single user by id
  - PUT     => update a user
  - DELETE  => delete a single user
/api/users
  - POST => post a new user

## Topics
/api/users/:user-id/topics/:topic-id
  - GET     => get a single deck by id
  - PUT     => update a deck
  - DELETE  => delete a single deck
/api/users:/user-id/decks
  - POST => post a new deck

## Cards
/api/users/:user-id/topics/:topic-id/cards/:card-id
  - GET     => get a single card by id
  - PUT     => update a card
  - DELETE  => delete a single card
/api/users:/user-id/decks/:deck-id/cards
  - POST => post a new deck
