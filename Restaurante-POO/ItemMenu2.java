package br.com.restaurante;

public class ItemMenu2 {
    private String nome;
    private String categoria;
    private double preco;

    public ItemMenu2(String nome, String categoria, double preco) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public double getPreco() {
        return preco;
    }

    public String getDetalhesItem() {
        return "Nome: " + nome + ", Categoria: " + categoria + ", Preço: R$ " + preco;
    }
}
