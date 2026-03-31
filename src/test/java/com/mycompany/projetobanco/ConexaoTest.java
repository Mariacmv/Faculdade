package com.mycompany.projetobanco;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

import org.junit.jupiter.api.Test;
import java.sql.Connection;

import static org.junit.jupiter.api.Assertions.assertNotNull;
/**
 *
 * @author maria
 */
public class ConexaoTest {

    @Test
    public void testeConexao() {

        Connection conn = Conexao.conectar();

        assertNotNull(conn);

    }
}
