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
        telefone:document.getElementById("telefone").value,
        predio: {
            id: Number(document.getElementById("predio").value)
        }
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
    document.getElementById("predio").value=worker.predio?.id;
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

function buscarWorkers() {
    let tipo = document.getElementById("tipoBusca").value;
    let valor = document.getElementById("busca").value.toLowerCase();

    let linhas = document.querySelectorAll("tbody tr");
    linhas.forEach(linha => {
        let nome = linha.children[1].textContent.toLowerCase();
        let predio = linha.children[3].textContent.toLowerCase();

        if (tipo === "nome") {
            linha.style.display = nome.includes(valor) ? "" : "none";
        } else if (tipo === "predio") {
            linha.style.display = predio.includes(valor) ? "" : "none";
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
        listar();

        const busca = document.getElementById("busca");
        if (busca) {
            busca.addEventListener("keyup", buscarWorkers);
        }
        const salvarBtn = document.getElementById("salvarBtn");
        if (salvarBtn) {
            salvarBtn.addEventListener("click", criarWorker);
        }

        const limparBtn = document.getElementById("limparBtn");
        if (limparBtn) {
            limparBtn.addEventListener("click", limpar);
        }
        const listarBtn = document.getElementById("listarBtn");
        if (listarBtn) {
            limparBtn.addEventListener("click", listar);
        }
});
