let workers=[];
let editId=null;

async function listar(){

    workers = await listarWorkers();

    render(workers);

}

async function criarWorker(){

    const worker={

        nome:document.getElementById("nome").value,
        email:document.getElementById("email").value,
        predio:document.getElementById("predio").value,
        telefone:document.getElementById("telefone").value

    };

    if(editId==null){

        await criarWorkerAPI(worker);

    }else{

        await atualizarWorkerAPI(editId,worker);

        editId=null;

    }

    limpar();

    listar();

}

async function deletar(id){

    await deletarWorkerAPI(id);

    listar();

}

function editar(id){

    const worker=workers.find(w=>w.id===id);

    document.getElementById("nome").value=worker.nome;
    document.getElementById("email").value=worker.email;
    document.getElementById("predio").value=worker.predio;
    document.getElementById("telefone").value=worker.telefone;

    editId=id;

}

function limpar(){

    document.getElementById("nome").value="";
    document.getElementById("email").value="";
    document.getElementById("predio").value="";
    document.getElementById("telefone").value="";

    editId=null;

}

function buscar(){

    const texto=document.getElementById("busca").value.toLowerCase();

    const filtrado=workers.filter(w=>w.nome.toLowerCase().includes(texto));

    render(filtrado);

}