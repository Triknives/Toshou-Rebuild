# _Toshou_

#### _An application that helps users track their current completed books, wanted books, and recently reviewed books. Project has been created using the MERN stack.  March 3rd, 2020_

#### By _**Brett Cordell**_

## Description

_An Application to explore the MERN stack. This is my first attempt using the stack, and will be a bit bumpy! The intent of the application once it is completed is to help avid readers or those looking for a way to increase the amount of time they do per week or day. The application is designed to help readers track the books completed, the next book they'd like to read, and their favorite. Users will also be able to leave reviews of the books they read to help other readers find their next book to read. Users will also be able to add reading goals, or notes on their page. In short, its an online book club!_

## Stretch Goals:
_At this time, authorization is being configured to better work with Heroku, as it is struggling to track the JWT exchange and values as described in "known bugs."_

_Further updates will bring private routing to the application. Allowing each user to maintain their own lists, as for now it is a message board allowing others to leave reviews and edit a "main list." It is effectively an app for an individual at this time._

## Setup/Installation Requirements

* _Have Node.js installed_
* _Acquire Repo from Git or sign up via deployed Heroku (link to be provided)._
* _Once Repo is cloned - Do Npm install / then CD into Client and npm install again (script for one time install coming)_
* _Server registered and account registered to Atlas MongoDb or a server of your own to route to / proxy. As this Repo will have be removing the URI within the config file._
* _Once you have registered on Atlas MongoDB, find your URI within "collections" and paste that string in ./config/default.json where "Mongo_URI is located. Eventually once this repo removes its current URI, there will be a prompt._

## Known Bugs

_At this time, there is an issue with the Heroku deploy being able to follow the exchange and storage of the JWT variable and value. Thus auth is currently disabled at this time. Please send and e-mail to Cordell.desu@gmail.com if you have any specific bugs or concerns._

## Support and contact details

_Please send and e-mail to Cordell.desu@gmail.com if you have any specific bugs or concerns._

## Technologies Used

_This application utilizes the "MERN" stack. Allowing the application to store persistent data and changes as created by the user. Authenitcation has further been added through BcryptJS a variant of the ruby gem._

* _This application is built utilizing the MERN stack_
* _Axios_
* _React_
* _BcryptJS_
* _Node.js_
* _ExpressJS_
* _MongoDb_
* _Atlas Mongo Server Hosting_
* _JSON Web Token_

## Page Wireframe
_Designs from the wireframe are a work in progress and will continue to be developed and implemented into the site._
![UserPage](https://user-images.githubusercontent.com/50305423/75633743-81548280-5bbc-11ea-87a2-745783d81002.png)

### License

*MIT LICENSE*

Copyright (c) 2020 **_Brett Cordell_**
