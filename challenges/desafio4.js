db.produtos.find({
    $and: [
        { vendidos: { $lt: 100 } },
        { vendidos: { $gt: 50 } },
    ] },
    {
        _id: 0,
        nome: 1, 
        vendidos: 1,
    }).sort({ vendidos: 1 });
