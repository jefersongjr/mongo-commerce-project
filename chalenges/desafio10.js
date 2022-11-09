db.produtos.find({
    valoresNutricionais: {
         $elemMatch: { tipo: "proteínas", quantidade: { $lte: 30, $gte: 40 } },
        } },
    {
        _id: 0,
        nome: 1, 
    });