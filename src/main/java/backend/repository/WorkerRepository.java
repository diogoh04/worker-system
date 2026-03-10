package backend.repository;

import backend.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface WorkerRepository extends JpaRepository<Worker, Long> {
}
