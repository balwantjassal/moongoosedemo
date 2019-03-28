var express = require('express');
var router = express.Router();
var Project = require('../models/Project');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/project/create', function(req, res, next) {
  res.render('createProject',{ title: 'Project Form' });
});

router.post('/project/create', function(req, res, next) {
    const newProject = new Project({
      title:req.body.title,
      description:req.body.description
    });
   
    newProject.save()
      .then((value) => {
        console.log('Project Saved');
      })
      .catch((err) => {
        console.log(err);
      })
      res.render('index', { title: 'Express' });
    
});

module.exports = router;
