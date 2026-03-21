function render(listaWorkers){

    const lista = document.getElementById("lista");

    lista.innerHTML="";

    listaWorkers.forEach(w=>{

        lista.innerHTML+=`
<tr>

<td>${w.id}</td>
<td>${w.nome}</td>
<td>${w.email}</td>
<td>${w.predio ? w.predio.nome : ""}</td>

<td>
<a href="https://wa.me/${w.telefone.replace(/\D/g,"")}" target="_blank">
📱 ${w.telefone}
</a>
</td>

<td>

<button class="edit" onclick="editar(${w.id})">Editar</button>

<button class="delete" onclick="deletar(${w.id})">Excluir</button>

</td>

</tr>
`;

    });

}