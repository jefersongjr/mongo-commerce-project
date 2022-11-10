db.produtos.updateMany({
    $nor: [{ nome: "McChicken" }] },
   {
    $push: { ingredientes: "ketchup" },
  });