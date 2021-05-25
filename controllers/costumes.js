const Costume = require('../models').Costume;
const User = require('../models').User

const index = (req, res) => {
	Costume.findAll().then(costumes => {
	res.render('index.ejs', { costumes: costumes });
	})
}

const renderNew = (req, res) => {
	User.findAll().then(allusers => {
		User.findByPk(req.params.user).then(user => {
	res.render('new.ejs', {
		users:allusers,
		user:user
	})   
})
})
}
const postCostume = (req, res) => {  
	Costume.create(req.body).then(newCostume => {
    res.redirect('/costumes');
	})
}

const showCostume = (req, res) => {
	Costume.findByPk(req.params.index, {
        include: [{
            model: User,
            attributes: ['name', 'id']
        }]
	}).then(costumes => {
	res.render('show.ejs', {costumes: costumes});
	})
    
}

const costumeEditor= (req, res) => {
	Costume.findByPk(req.params.index).then(costumes => {
	  res.render('edit.ejs', {
		costumes: costumes
		})     
	})
  }
  
  const editCostume = (req, res) => {
		Costume.update(req.body, {
		  where: {id:req.params.index},
		  returning: true
		}).then( costumes => {
		  res.redirect('/costumes');
		}) 
	  }

const deleteCostume = (req, res) => {
	Costume.destroy({where:{id:req.params.index}}).then (() => {
    res.redirect('/costumes');
	});
}

module.exports = {
	index,
	renderNew,
	postCostume,
	deleteCostume,
	showCostume,
	costumeEditor,
	editCostume
}