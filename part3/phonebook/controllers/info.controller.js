let persons = require("../data/persons.data");

const getInfo = (req, res) => {
  const currentDate = new Date().toString("en-US");
  res.status(200).send(`
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
        <h2>
            Phonebook
        </h2>
        <p>This phonebook currently has information for <b>${persons.length}</b> people.</p>
        <code>${currentDate}</code>
    </div>
    `);
};

module.exports = {
  getInfo,
};
