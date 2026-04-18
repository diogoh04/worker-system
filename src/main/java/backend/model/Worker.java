package backend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;


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

    public Worker() {
    }

    public Worker(Long id, String nome, String staffNumber,Predio predio, String telefone) {
        this.nome = nome;
        this.staffNumber = staffNumber;
        this.predio = predio;
        this.telefone = telefone;
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getStaffNumber() { return staffNumber;}
    public void setStaffNumber(String staffNumber) { this.staffNumber = staffNumber; }

    public Predio getPredio() {
        return predio;
    }

    public void setPredio(Predio predio) {
        this.predio = predio;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
}