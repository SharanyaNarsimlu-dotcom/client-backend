const mysql = require('../db/db');



let User = {
    AddClients: (req, res, next) => {
      const {name,email,phone,address} = req.body;
        let query = `call client.InsertClient('${name}', '${email}','${phone}', '${address}');`;

        mysql.query(query, (err, result) => {
            if (err) {
                res.status(400).json({
                    status: 400,
                    code: 'error',
                    message: err
                })
            }
            return res.status(200).json({
                status: 200,
                code: 'null',
                message: 'successfully inserted',
                // result: result
            })

        })

    },
    getClient: function (req, res, next) {
        let query = `call client.GetClients();`;
        mysql.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({
                    code: '',
                    error: "",
                    message: err,
                    data: []

                })
            }
            return res.status(200).json({
                code: 'ok',
                error: "",
                message: 'Succesfully fetched data',
                data: result[0]
            })

        })
    },
    updClient: function (req, res, next) {
        const {cid}=req.params;
        const {name,email,phone,address}=req.body
        let query = `call client.UpdClient('${cid}', '${name}', '${email}', '${phone}', '${address}');`;
        mysql.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({
                    code: '',
                    error: "",
                    message: err,
                    data: []

                })
            }
            return res.status(200).json({
                code: 'ok',
                error: "",
                message: 'Succesfully Updated',
                data: result[0]
            })

        })
    },
    deleteclient: function (req, res, next) {
        const { cid } = req.params;
        let query = `call client.DelClient('${cid}');`;
        mysql.query(query, (err, result) => {
          if (err) {
            return res.status(400).json({
              code: "",
              error: "",
              message: err,
              data: [],
            });
          }
    
          return res.status(200).json({
            code: "ok",
            error: "",
            message: " data Deleted ",
            data: result[0],
          });
        });
      },
      SearchByName: function (req, res, next) {
        const {Search}=req.params;
        let query = `call client.SearchByName('${Search}');`;
        mysql.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({
                    code: '',
                    error: "",
                    message: err,
                    data: []

                })
            }
            return res.status(200).json({
                code: 'ok',
                error: "",
                message: 'Succesfully fetched data',
                data: result[0]
            })

        })
    },

}

module.exports = User;