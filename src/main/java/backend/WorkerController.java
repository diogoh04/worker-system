package backend;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.FrameworkServlet;

import java.util.List;

@RestController
@RequestMapping("/worker")
@CrossOrigin("*")
public class WorkerController {

   private final WorkerRepository repository;

    public WorkerController(WorkerRepository repository, FrameworkServlet frameworkServlet) {
       this.repository = repository;
    }

    @GetMapping
    public List<Worker> listar() {
       return repository.findAll();
    }

    @GetMapping("/search/predio")
    public List<Worker> buscarPorPredio(@RequestParam String Predio) {
       return repository.findByPredioContainingIgnoreCase(Predio);
    }

    @PostMapping
    public Worker criar(@RequestBody Worker worker) {
       return repository.save(worker);
    }

    @PutMapping("/{id}")
    public Worker atualizar(@PathVariable Long id, @RequestBody Worker worker){
       Worker w = repository.findById(id).orElseThrow();
       w.setNome(worker.getNome());
       w.setEmail(worker.getEmail());
       w.setPredio(w.getPredio());
       w.setTelefone(w.getTelefone());
       return repository.save(w);
    }

    @DeleteMapping("/{id}")
    public void apagar(@PathVariable Long id) {
       repository.deleteById(id);
    }
}