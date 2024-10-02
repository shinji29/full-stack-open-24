const {
  getAllPersons,
  getPersonById,
  createPerson,
  deletePerson,
} = require("../controllers/person.controller");

const router = require("express").Router();

router.get("/", getAllPersons);
router.post("/", createPerson);

router.get("/:id", getPersonById);
router.delete("/:id", deletePerson);

module.exports = router;
