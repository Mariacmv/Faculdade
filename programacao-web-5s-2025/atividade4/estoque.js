//Correção:
let itens = []; //arrays de itens que começa vazio

function adicionar(item){
    let item_valido = true; //assumo que o item é válido
    //se o id não for numérico ou se já tiver cadastrado (?) ou se o id for igual a 0 ou se qtd não for numérico ou se o qtd for menor que 0, o item não é válido
    if(!is_numerico(item.id) || is_id_cadastrado(item.id) || item.id <= 0 || !is_numerico(item.qtd) || item.qtd < 0){ 
        item_valido = false;
    }
    if(item.nome.length <= 0){ //não aceita item que não tem nome
        item_valido = false;
    }
    if (item_valido){
        itens.push(item);//adiciona o item recebido ao array de itens
    }
    return item_valido; 
}

function listar(){
    return itens; //só retorna o array de itens
}

function editar (id, qtd){ //recebe id e quantidade
    let item_valido = true;
    //se o id não for numérico ou se o id já estiver cadastrado ou se a quantidade não for numérica, então o item não é válido
    if(!is_numerico(id) || !is_id_cadastrado(id) || !is_numerico(qtd)){
        item_valido = false;
    }
    itens.forEach(item_cadastrado => { //forEach é uma função do objeto array do javascript que percorre arrays e faz algo com cada item
        if (item_cadastrado.id == id){ //verifico se o id corresponde a algum id que possuo, se sim:
            item_cadastrado.qtd = qtd; //modifico a quantidade de acordo com o que foi passado
        }
    });
    return true; //só para confirmar que deu certo a operação
}

function remover (id){

}

module.exports = {
    adicionar,
    listar,
    editar
};//crio um módulo para exportar as funções para a outra página?

function is_id_cadastrado(id){
    let id_cadastrado = false;
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            id_cadastrado = true;
        }
    });
    return id_cadastrado;
} //função para validação

function is_numerico(n){ //recebe um n
    if(isNaN(n) || n == Null){ //caso não seja número?
        return false;
    }
    return true;
} //Para verificar se é numérico
