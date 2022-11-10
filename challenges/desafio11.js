db.produtos.find({
  $nor: [{ nome: "Big Mac" }, { nome: "McChicken" }] },
 {
  _id: 0,
  nome: 1,
  curtidas: 1,
  vendidos: 1,
});