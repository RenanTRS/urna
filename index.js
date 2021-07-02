function insert(num){
    if(nums.length < 1){
        nums.push(num);
        document.getElementById("numCampo").innerHTML = nums[0];
    } else if(nums.length == 1){
        nums.push(num);
        document.getElementById("numCampo2").innerHTML = nums[1];
        mudaDisplay("tela__container", "none");
        mudaDisplay("tela__candidato", "flex");
        document.getElementById("tela__candidato").style.justifyContent = "space-between";
        mostraDado('num1', nums[0]);
        mostraDado('num2', nums[1]);
        mostraDado('nome', caramelo.nome);
        mostraDado('partido',caramelo.partido);
        
        
        mostraDado("candidato__foto", '<img src="'+caramelo.foto+'">');
        
    }
}
function mudaDisplay(id, propriedades){
    document.getElementById(id).style.display = propriedades;
}
function mostraDado(id, inner){
    document.getElementById(id).innerHTML = inner;
}

let caramelo = {
    numero: '01',
    nome: 'Doguin Caramelo',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex2f8n-gcya-IaEBU03fK6XCKNPEIZs31wCRH6P7RA2DQfVaYEFfmAZxsu8C7tAuK-eg&usqp=CAU',
    partido: 'RUA'
}
let candidatos = [caramelo];
console.log(candidatos);
let nums = [];
