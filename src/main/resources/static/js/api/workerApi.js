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

}