    package br.com.restaurante;
    
    public class Cliente {
        // Atributos privados
        private String nome;
        private String endereco;
        private String telefone;
    
        // Construtor com parâmetros
        public Cliente (String nome, String endereco, String telefone){
            this.nome = nome;
            this.endereco = endereco;
            this.telefone = telefone;
        }
    
        // Método registrarCliente()
        public void registrarCliente(String nome, String endereco, String telefone) {
            this.nome = nome;
            this.endereco = endereco;
            this.telefone = telefone;
        }
    
        // Métodos getter e setter
        // Nome
        public String getNome(){
            return nome;
        }
    
        public void setNome(String nome) {
            this.nome = nome;
        }
    
        // Endereço
        public String getEndereco(){
            return endereco;
        }
    
        public void setEndereco(String endereco) {
            this.endereco = endereco;
        }
    
        // Telefone
        public String getTelefone(){
            return telefone;
        }
    
        public void setTelefone(String telefone) {
            this.telefone = telefone;
        }
    
        // Método visualizarCliente()
        public String visualizarCliente(){
            return "Nome: " + nome + "\nEndereço: " + endereco + "\nTelefone: " + telefone;
        }
    
    
    }
