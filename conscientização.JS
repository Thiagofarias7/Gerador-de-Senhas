var senha, no = 0, letra,scerta;
scerta = parseInt(prompt("Digite uma senha de 4 dígitos (números)"));
console.clear();
senha = 0;
while(senha != scerta){
//console.clear()  
senha  = Math.random();
senha = senha*10000;
senha = Math.round(senha);
//alert(senha);
no++
}
console.clear() 
alert("Senha descoberta é: " + senha);
alert(no + " tentativas depois");
alert("Este programa criou " + no + " números aleatórios em questão de milésimos pra conseguir achar a sua senha")
alert('SENHAS SÃO RELATIVAMENTE FÁCEIS DE DESCOBRIR. CUIDADO COM SUAS REDES SOCIAIS, BANCOS, APLICATIVOS...')
let text = "HELLO WORLD";
//let letter = text.charAt(1);
//console.log(letter);
