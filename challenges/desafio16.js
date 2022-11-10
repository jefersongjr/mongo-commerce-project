db.produtos.updateMany({ nome: "Big Mac" },
    { $set: { ultimaModificacao: { $type: "timestamp" } },
  });

db.produtos.find({ ultimaModificacao: { $exists: true } },
    { 
      _id: 0, 
      nome: 1,
  });