const A = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

function transporMatriz(A){
  console.log("Matriz Original:");

  for(let i = 0; i < A.length; i++){
     let linha = "";
    for(let j = 0; j < A[i].length; j++){
       linha += A[i][j] + "\t";       
    }
    console.log(linha);
  }

  console.log("\nMatriz Transposta:");

  const transposta = [];

  for(let i = 0; i < A[0].length; i++){
      let linhaTransposta = [];
      for(let j = 0; j < A.length; j++){
         linhaTransposta.push(A[j][i]);
      }
      transposta.push(linhaTransposta);
  }

  for(let i = 0; i < transposta.length; i++){
     console.log(transposta[i].join("\t"));
  }
}

transporMatriz(A);
