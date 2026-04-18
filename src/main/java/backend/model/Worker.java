package backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(name = "staff_number")
    private String staffNumber;

    private String telefone;

    @ManyToOne
    @JoinColumn(name = "predios")
    private Predio predio;

    @OneToMany(mappedBy = "worker", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feedback> feedbacks;

    public Worker() {}

    public Worker(Long id, String nome, String staffNumber, Predio predio, String telefone) {
        this.id = id;
        this.nome = nome;
        this.staffNumber = staffNumber;
        this.predio = predio;
        this.telefone = telefone;
    }

    public Long getId() { return id; }

    public String getNome() { return nome; }

    public String getStaffNumber() { return staffNumber; }

    public String getTelefone() { return telefone; }

    public Predio getPredio() { return predio; }

    public List<Feedback> getFeedbacks() { return feedbacks; }

    public void setId(Long id) { this.id = id; }

    public void setNome(String nome) { this.nome = nome; }

    public void setStaffNumber(String staffNumber) { this.staffNumber = staffNumber; }

    public void setTelefone(String telefone) { this.telefone = telefone; }

    public void setPredio(Predio predio) { this.predio = predio; }

    public void setFeedbacks(List<Feedback> feedbacks) { this.feedbacks = feedbacks; }
}