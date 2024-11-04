const router = require("express").Router(); 

const controller = require("./requestForm.controller");

router.route("/")
.get(controller.sendResponseToUser);

module.exports = router; 