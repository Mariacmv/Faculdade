package br.com.restaurante;

public class Pedido {
    private ItemMenu[] itens;
    private int numItens;
    private Cliente cliente;
    private float total;
    private String status;

    // Definindo os possíveis status
    private static final String[] statusList = {"Em andamento", "Pronto", "Entregando"};
    private static int statusCounter = 0;  // contador para mudar o status

    public Pedido(int capacidadeInicial, Cliente cliente) {
        this.itens = new ItemMenu[capacidadeInicial];
        this.numItens = 0;
        this.cliente = cliente;
        this.total = 0.0f;
        this.status = statusList[statusCounter];
    }

    public void adicionarItem(ItemMenu item) {
        if (numItens == itens.length) {
            // Redimensiona o array se necessário
            ItemMenu[] novoArray = new ItemMenu[itens.length * 2];
            System.arraycopy(itens, 0, novoArray, 0, itens.length);
            itens = novoArray;
        }
        itens[numItens++] = item;
    }

    public void calcularTotal() {
        total = 0.0f;
        for (int i = 0; i < numItens; i++) {
            total += itens[i].getPreco();
        }
    }

    // Método para mudar o status automaticamente
    public void mudarStatus() {
        statusCounter = (statusCounter + 1) % statusList.length;
        status = statusList[statusCounter];
    }

    public String visualizarPedido() {
        StringBuilder sb = new StringBuilder();
        sb.append("Cliente:\n").append(cliente.visualizarCliente()).append("\n");
        sb.append("Itens do Pedido:\n");
        for (int i = 0; i < numItens; i++) {
            sb.append(itens[i].getDetalhesItem()).append("\n");
        }
        sb.append("Total: ").append(total).append("\n");
        sb.append("Status: ").append(status).append("\n");
        return sb.toString();
    }
}
