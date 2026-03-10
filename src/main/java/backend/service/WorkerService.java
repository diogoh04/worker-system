package backend.service;

import backend.model.Worker;
import backend.repository.WorkerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkerService {

    private final WorkerRepository repository;

    public WorkerService(WorkerRepository repository) {
        this.repository = repository;
    }

    public List<Worker> listar() {
        return repository.findAll();
    }

    public Worker salvar(Worker worker) {
        return repository.save(worker);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public List<Worker> findBypredioContainingIgnoreCase(String predio) {
        return List.of();
    }


    public Optional<Worker> findById(Long id) {
        return repository.findById(id);
    }
}
