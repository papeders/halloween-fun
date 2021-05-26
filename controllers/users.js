const User = require('../models').User;
const Costume = require('../models').Costume;

const signUp = (req, res) => {
    res.render('users/signup.ejs');
}
const postUser = (req, res) => {
    User.create(req.body).then(newUser => {
        res.redirect(`/users/profile/${newUser.id}`)
    })
 }
const showUser = (req, res) => {
    User.findByPk(req.params.index, {
        include: [{
            model: Costume
        }]
    }).then(user => {        
        res.render('users/profile.ejs', {
            user: user,
    })    
})
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs');
}
const login = (req, res) => {
    User.findOne({where: {username: req.body.username}}).then(user =>{
        if (user.password === req.body.password){
        res.redirect(`/users/profile/${user.id}`);
        } else {
            res.redirect('/users/login');
        }
    })
    
}

const profileEdit = (req, res) => {
    User.findByPk(req.params.index).then(user => {
            res.render('users/edit.ejs', {
                user:user
                })    
      })
}
const editProfile = (req, res) => {
    User.update(req.body, {
        where: {id: req.params.index}, 
        returning: true, plain: true}).then(user => {
        res.redirect('/users/profile/' + req.params.index);
        })
    
}

const deleteProfile = (req, res) => {
    User.destroy({where: {id:req.params.index}}).then (() => {
        res.redirect('/costumes');
    })
}
module.exports = {
    signUp,
    postUser,
    showUser,
    renderLogin,
    login,
    profileEdit,
    editProfile,
    deleteProfile
}