let numeroAlunos = 10;

for (let i = 0; i <= numeroAlunos; i++) {
  if (i === 0) {
    console.log("O número atual é zero");
  } else if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é ímpar`);
  }
}

let listaAlunos = ["Marcelo", "Joana", "Cleber", "Sebastião", "Tostes"];

/* for (const aluno of listaAlunos) {
  console.log(aluno);
} */

/*
listaAlunos.forEach((element) => {
  console.log(element);
});
*/
