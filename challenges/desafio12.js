db.produtos.updateMany({
  $nor: [{ nome: "McChicken" }] },
 {
  $addToSet: { ingredientes: "ketchup" },
});

db.produtos.find({},
  { 
    _id: 0,
    nome: 1,
    ingredientes: 1,
  });