package backend.controller;

import backend.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;


import backend.model.Feedback;
import backend.model.Predio;
import backend.model.Worker;
import backend.repository.FeedbackRepository;
import backend.repository.PredioRepository;
import backend.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/worker")
@CrossOrigin("*")


public class WorkerController {
    @Autowired
    private FeedbackRepository feedbackRepository;


    private final WorkerService service;

    public WorkerController(WorkerService service) {
       this.service = service;
    }

    @GetMapping
    public List<Worker> listar() {
       return service.listar();
    }

    @GetMapping("/predios")
    public List<Predio> listarPredios() {
        return predioRepository.findAll();
    }
    @Autowired
    private PredioRepository predioRepository;

    @PostMapping
    public Worker criar(@RequestBody Worker worker) {
       return service.salvar(worker);
    }

    @PostMapping("/{id}/feedback")
    public Feedback adicionarFeedback(@PathVariable Long id, @RequestBody Map<String, String> body) {

        Worker worker = service.findById(id).orElseThrow();

        Feedback feedback = new Feedback();
        feedback.setTexto(body.get("texto"));
        feedback.setData(LocalDateTime.now());
        feedback.setWorker(worker);

        return feedbackRepository.save(feedback);
    }

    @PutMapping("/{id}")
    public Worker atualizar(@PathVariable Long id, @RequestBody Worker worker){
       Worker w = service.findById(id).orElseThrow();
       w.setNome(worker.getNome());
        w.setStaffNumber(worker.getStaffNumber());
       w.setPredio(worker.getPredio());
       w.setTelefone(worker.getTelefone());
       return service.salvar(w);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
       service.deletar(id);
    }
}