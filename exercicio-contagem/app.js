let numeroAlunos = 30;

for (let i = 0; i <= numeroAlunos; i++) {
  if (i === 0) {
    console.log("O número atual é zero");
  } else if (i % 2 === 0 && i > 5) {
    console.log(`${i} é par e maior do que 5`);
  } else if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é ímpar`);
  }
}

let listaAlunos = ["Joana", "Bia", "Ana", "Zé", "Pedro", "Jeff", "Oli"];

for (const aluno of listaAlunos) {
  console.log(aluno);
}

for (let aluno = 0; aluno <= listaAlunos.length; aluno++) {
  if (aluno === 0) {
    console.log("o número é zero");
  } else if (aluno % 2 === 0) {
    console.log(`${aluno} é par`);
  } else {
    console.log(`${aluno} é ímpar`);
  }
}
