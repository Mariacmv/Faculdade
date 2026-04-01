package com.mycompany.projetobanco;

public class Projetobanco {

    public static void main(String[] args) {

        UsuarioDAO dao = new UsuarioDAO();

        dao.salvar("Maria", "maria@email.com");

    }

}