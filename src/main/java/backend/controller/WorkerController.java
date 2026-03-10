package backend.controller;

import backend.model.Predio;
import backend.model.Worker;
import backend.repository.PredioRepository;
import backend.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/worker")
@CrossOrigin("*")
public class WorkerController {

   private final WorkerService service;

    public WorkerController(WorkerService service) {
       this.service = service;
    }

    @GetMapping
    public List<Worker> listar() {
       return service.listar();
    }

    @GetMapping("/predio")
    public List<Predio> listarPredios() {
        return predioRepository.findAll();
    }
    @Autowired
    private PredioRepository predioRepository;

    @PostMapping
    public Worker criar(@RequestBody Worker worker) {
       return service.salvar(worker);
    }

    @PutMapping("/{id}")
    public Worker atualizar(@PathVariable Long id, @RequestBody Worker worker){
       Worker w = service.findById(id).orElseThrow();
       w.setNome(worker.getNome());
       w.setEmail(worker.getEmail());
       w.setPredio(w.getPredio());
       w.setTelefone(w.getTelefone());
       return service.salvar(w);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
       service.deletar(id);
    }
}