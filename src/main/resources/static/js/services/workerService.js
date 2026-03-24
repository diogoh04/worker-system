let workers = [];
let editId = null;

const BASE_URL = "/worker";

async function listarWorkers() {
    const response = await fetch(BASE_URL);
    return await response.json();
}

async function listar() {
    workers = await listarWorkers();
    render(workers);
}

async function carregarPredios() {
    const response = await fetch("https://worker-system.onrender.com/worker/predios");
    const predios = await response.json();

    const select = document.getElementById("predio");

    select.innerHTML = '<option value="">Selecione o prédio</option>';

    predios.forEach(p => {
        const option = document.createElement("option");
        option.value = p.id;
        option.text = p.nome;
        select.appendChild(option);
    });
}

async function criarWorkerAPI(worker) {
    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(worker)
    });
}

async function atualizarWorkerAPI(id, worker) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(worker)
    });
}

async function deletarWorkerAPI(id) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}

async function criarWorker() {
    const worker = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        predio: {
            id: Number(document.getElementById("predio").value)
        }
    };

    if (editId == null) {
        await criarWorkerAPI(worker);
    } else {
        await atualizarWorkerAPI(editId, worker);
        editId = null;
    }

    limpar();
    listar();
}

async function deletar(id) {
    await deletarWorkerAPI(id);
    listar();
}

function editar(id) {
    const worker = workers.find(w => w.id === id);

    document.getElementById("nome").value = worker.nome;
    document.getElementById("email").value = worker.email;
    document.getElementById("telefone").value = worker.telefone;
    document.getElementById("predio").value = worker.predio?.id || "";

    editId = id;
}

function limpar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("predio").value = "";

    editId = null;
}
function buscarWorkers() {

    const tipo = document.getElementById("tipoBusca").value;
    const valor = document.getElementById("busca").value.toLowerCase();

    const filtrados = workers.filter(w => {
        if (tipo === "nome") return w.nome.toLowerCase().includes(valor);
        if (tipo === "email") return w.email.toLowerCase().includes(valor);
        if (tipo === "predio") {
        const nomePredio =
            typeof w.predio === "string"
            ? w.predio
            : w.predio?.nome;
            return nomePredio?.toLowerCase().includes(valor);
        }
        return true;
    });

    render(filtrados);
}

document.addEventListener("DOMContentLoaded", () => {
    listar();
    carregarPredios();

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
        listarBtn.addEventListener("click", listar);
    }
});