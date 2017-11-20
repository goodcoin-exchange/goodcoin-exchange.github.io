package com.goodcoin;


import com.util.JDBCConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Account {

    private Connection conn = JDBCConnection.getConnection();

    public boolean isValidAccount(String sEmail, String sPassword)
    {

       if (checkEmail(sEmail)&&checkPassword(sPassword))
        return true;
        return false;
    }

    private boolean checkEmail(String email)
    {

        try {
            PreparedStatement prepStatement = conn.prepareStatement("select email from table ");

            if(true);
        }
        catch(SQLException e)
        {
            e.getMessage();
        }

        return false;
    }

    private boolean checkPassword(String password){

        return false;
    }

    private boolean newIP(){
        return false;
    }

}
