const Persona = require("../retos día 7/persona")

const Manuel = new Persona ("Manuel", 1986, "arquitecto", "Inglaterra", ["ok","si","bien"], 180, 82);
const Carla = new Persona ("Carla", 2001, "abogado", "Argentina", ["ok","si","bien"], 174, 61);

console.log(Manuel.mostrarTodos());
console.log(Carla.mostrarTodos());