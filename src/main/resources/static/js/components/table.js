async function abrirFeedback(id) {
  const texto = prompt("Digite o feedback:");

  if (!texto) return;

  await fetch(`/workers/${id}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ texto: texto })
  });

  alert("Feedback salvo!");
  listar();
}

function render(listaWorkers){

    const lista = document.getElementById("lista");

    lista.innerHTML="";

    listaWorkers.forEach(w=>{

        lista.innerHTML+=`
<tr>

<td>${w.id}</td>
<td>${w.nome}</td>
<td>${w.staffNumber}</td>
<td>${w.predio ? w.predio.nome : ""}</td>

<td>
<a href="https://wa.me/${w.telefone.replace(/\D/g,"")}" target="_blank">
📱 ${w.telefone}
</a>
</td>

<td>

<button class="edit" onclick="editar(${w.id})">Editar</button>

<button class="delete" onclick="deletar(${w.id})">Excluir</button>

<button onclick="abrirFeedback(${w.id})">Feedback</button>
</td>

</tr>
`;

    });

}