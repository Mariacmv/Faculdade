package br.com.restaurante;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Captura as informações do cliente
        System.out.println("Digite o nome do cliente:");
        String nomeCliente = scanner.nextLine();

        System.out.println("Digite o endereço do cliente:");
        String enderecoCliente = scanner.nextLine();

        System.out.println("Digite o telefone do cliente:");
        String telefoneCliente = scanner.nextLine();

        // Criando um cliente com as informações fornecidas
        Cliente cliente = new Cliente(nomeCliente, enderecoCliente, telefoneCliente);

        // Adicionando itens ao menu
        System.out.println("Quantos itens o cliente deseja adicionar ao pedido?");
        int numItens = scanner.nextInt();
        scanner.nextLine(); // Consumir a nova linha deixada pelo nextInt()

        Pedido pedido = new Pedido(numItens, cliente);  // Cria um pedido com o número de itens informado

        for (int i = 0; i < numItens; i++) {
            System.out.println("Digite o nome do item " + (i + 1) + ":");
            String nomeItem = scanner.nextLine();

            System.out.println("Digite a categoria do item " + (i + 1) + ":");
            String categoriaItem = scanner.nextLine();

            System.out.println("Digite o preço do item " + (i + 1) + ":");
            double precoItem = scanner.nextDouble();
            scanner.nextLine(); // Consumir a nova linha

            // Adiciona o item ao pedido
            ItemMenu item = new ItemMenu(nomeItem, categoriaItem, precoItem);
            pedido.adicionarItem(item);
        }

        // Calcula o total do pedido
        pedido.calcularTotal();

        // Muda o status do pedido para o próximo estado
        pedido.mudarStatus();

        // Exibe os detalhes do pedido
        System.out.println(pedido.visualizarPedido());

        scanner.close();
    }
}
