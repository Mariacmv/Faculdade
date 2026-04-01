/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.projetobanco;
import java.sql.Connection;
import java.sql.DriverManager;
/**
 *
 * @author maria
 */
public class Conexao {

    private static final String URL = "jdbc:mysql://localhost:3306/testeintegracao";
    private static final String USER = "root";
    private static final String PASSWORD = "senha";

    public static Connection conectar() {
        try {
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            return conn;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}