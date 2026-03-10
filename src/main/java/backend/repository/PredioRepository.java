package backend.repository;

import backend.model.Predio;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PredioRepository extends JpaRepository<Predio, Long> {
}
