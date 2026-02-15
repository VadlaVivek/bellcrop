const router = require("express").Router();
const Transaction = require("../models/Transaction");
const authMiddleware = require("../middleware/authMiddleware");

// add
router.post("/", authMiddleware, async (req, res) => {
  const transaction = await Transaction.create({
    ...req.body,
    userId: req.userId
  });
  res.json(transaction);
});

// get with pagination
router.get("/", authMiddleware, async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;

  const transactions = await Transaction.findAll({
    where: { userId: req.userId },
    limit,
    offset: (page - 1) * limit,
    order: [["date", "DESC"]]
  });

  res.json(transactions);
});

// update
router.put("/:id", authMiddleware, async (req, res) => {
  await Transaction.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: "Updated" });
});

// delete
router.delete("/:id", authMiddleware, async (req, res) => {
  await Transaction.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: "Deleted" });
});

module.exports = router;
