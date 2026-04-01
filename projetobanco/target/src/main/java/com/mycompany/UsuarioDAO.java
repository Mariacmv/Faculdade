package com.mycompany.projetobanco;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class UsuarioDAO {

    public boolean salvar(String nome, String email) {
        String sql = "INSERT INTO tab_usuario (nome, email) VALUES (?, ?)";

        try (Connection conn = Conexao.conectar();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // print do banco que está sendo usado
            System.out.println("Conectado ao: " + conn.getMetaData().getURL());

            stmt.setString(1, nome);
            stmt.setString(2, email);

            int linhas = stmt.executeUpdate();
            if (linhas > 0) {
                System.out.println("Usuário salvo com sucesso!");
                return true;
            } else {
                System.out.println("Não foi possível salvar o usuário.");
                return false;
            }

        } catch (Exception e) {
            System.out.println("Erro ao salvar: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

}