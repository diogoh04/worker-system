package backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String texto;

    private LocalDateTime data;

    @ManyToOne
    @JoinColumn(name = "worker_id")
    @JsonIgnore
    private Worker worker;

    // getters e setters

    public Long getId() { return id; }

    public String getTexto() { return texto; }

    public LocalDateTime getData() { return data; }

    public Worker getWorker() { return worker; }

    public void setId(Long id) { this.id = id; }

    public void setTexto(String texto) { this.texto = texto; }

    public void setData(LocalDateTime data) { this.data = data; }

    public void setWorker(Worker worker) { this.worker = worker; }
}