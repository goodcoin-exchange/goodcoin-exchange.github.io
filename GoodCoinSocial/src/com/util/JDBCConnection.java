package com.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCConnection {

    private static final String url = "URL of where database is";
    private static final String user = "username that'll access database";
    private static final String password = "password of person that'll access database";
    private static Connection conn = null;

    public static Connection getConnection()
    {
        try
        {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("connected to postgres");
        }
        catch(SQLException e)
        {
            System.out.println(e.getMessage());
        }
        return conn;
    }
}
