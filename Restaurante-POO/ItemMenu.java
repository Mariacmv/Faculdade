package br.com.restaurante;

public class ItemMenu {
    private String nome;
    private String categoria;
    private double preco;

    // Construtor com parâmetros
    public ItemMenu(String nome, String categoria, double preco) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
    }

    // Método getDetalhesItem (para retornar detalhes do item)
    public String getDetalhesItem() {
        return nome + " (" + categoria + ") - R$" + preco;
    }

    // Método getter para retornar o preço
    public double getPreco() {
        return preco;
    }

    // Getters e Setters para nome e categoria, se necessário
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
}
