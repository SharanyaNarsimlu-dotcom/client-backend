const routes = require('express').Router();
const ClientServices = require("../services/ClientServices")


routes.post('/addclient', (req, res, next) => {
    ClientServices.AddClients(req, res, next);
})



routes.get('/getAll', (req, res, next) => {
    ClientServices.getClient(req, res, next);
    //res.status(200).json({"establishment":"Running"});
});
routes.put('/updclient/:cid', (req, res, next) => {
   
    ClientServices.updClient(req, res, next);
});

routes.delete('/dltclient/:cid', (req, res, next) => {
   
    ClientServices.deleteclient(req, res, next);
});

routes.get('/searchbyname/:Search', (req, res, next) => {
   
    ClientServices.SearchByName(req, res, next);
});


module.exports = routes