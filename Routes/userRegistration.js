const express = require('express')
const userRegistration_Router = express.Router()

const { userGet, userPost, userDelete, userPut , userLogin, userTokenGet, emailSend} = require('../controller/userRegistration.api')

const {userRegistrationValidate} = require('../validation/userregister.joi')

userRegistration_Router.get('/userregistrationget', userGet)
userRegistration_Router.get('/tokentest', userTokenGet)
userRegistration_Router.post('/userregistrationpost', userRegistrationValidate, userPost)
userRegistration_Router.post('/userlogin',  userLogin)
userRegistration_Router.delete('/userregistrationdelete/:user_id', userDelete)
userRegistration_Router.put('/userregistrationput/:user_id',userRegistrationValidate, userPut)

userRegistration_Router.post('/email-send',  emailSend)

module.exports = {userRegistration_Router}