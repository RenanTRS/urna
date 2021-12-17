function insert(num){
    if(nums.length < 1){
        nums.push(num);
        document.getElementById("numCampo").innerHTML = nums[0];
        numero = num;
    } else if(nums.length == 1){
        nums.push(num);
        document.getElementById("numCampo2").innerHTML = nums[1];
        numero += num;
        mudaDisplay("tela__container", "none");
        mudaDisplay("tela__candidato", "flex");
        document.getElementById("tela__candidato").style.justifyContent = "space-between";
        mostraDado('num1', nums[0]);
        mostraDado('num2', nums[1]);
        for(busca in candidatos){
            if(numero == candidatos[busca].numero){
                mostraDado('nome', candidatos[busca].nome);
                mostraDado('partido', candidatos[busca].partido);
        
        
                mostraDado("candidato__foto", '<img src="'+candidatos[busca].foto+'">');        
            }
        }
        /*
        mostraDado('nome', caramelo.nome);
        mostraDado('partido',caramelo.partido);
        
        
        mostraDado("candidato__foto", '<img src="'+darkimeuton.foto+'">');
        */
        
    }
}
function mudaDisplay(id, propriedades){
    document.getElementById(id).style.display = propriedades;
}
function mostraDado(id, inner){
    document.getElementById(id).innerHTML = inner;
}

let numero = '';
let caramelo = {
    numero: '01',
    nome: 'Doguin Caramelo',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex2f8n-gcya-IaEBU03fK6XCKNPEIZs31wCRH6P7RA2DQfVaYEFfmAZxsu8C7tAuK-eg&usqp=CAU',
    partido: 'RUA'
}
let darkimeuton = {
    numero: '24',
    nome: 'Darkimeuton',
    foto: 'https://media-exp3.licdn.com/dms/image/C4E03AQHs9vBfsD2ldg/profile-displayphoto-shrink_200_200/0/1604973591941?e=1630540800&v=beta&t=mCgx6irEy6BdNwk6BsRM1BVEmKxlFdlhn7m5vmj3vAs',
    partido: 'ZNE'
}
let candidatos = [caramelo, darkimeuton];

let nums = [];
