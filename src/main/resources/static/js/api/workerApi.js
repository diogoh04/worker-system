async function listarWorkers(){

    const resposta = await fetch("/worker");

    return await resposta.json();

}

async function criarWorkerAPI(worker){

    await fetch("/worker",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(worker)
    });

}

async function deletarWorkerAPI(id){

    await fetch("/worker/"+id,{
        method:"DELETE"
    });

}

async function atualizarWorkerAPI(id, worker){

    await fetch("/worker/"+id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(worker)
    });

    async function carregarPredios() {

        const response = await fetch("/worker/predio");
        const predios = await response.json();

        const select = document.getElementById("predio");

        select.innerHTML = '<option value="">Selecione o prédio</option>';

        predios.forEach(predio => {

            const option = document.createElement("option");

            option.value = predio.id;
            option.textContent = predio.nome;

            select.appendChild(option);

        });

    }
    document.addEventListener("DOMContentLoaded", () => {
        carregarPredios();
    });
}
