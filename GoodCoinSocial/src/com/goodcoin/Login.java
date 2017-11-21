package com.goodcoin;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import com.Beans.LoginBean;
import com.util.BCrypt;
import com.util.JDBCConnection;


public class Login {

    private Connection conn = null;
    private PreparedStatement preparedStatement = null;
    private ResultSet resultSet = null;

    public String authenticateCredentials(LoginBean loginBean) throws SQLException
    {
        String email = loginBean.getEmail();
        String password = loginBean.getsPassword();

        String DEmail = "";
        String DPass = "";
        String role = "";

        try
        {
            conn = JDBCConnection.getConnection();
            preparedStatement = conn.prepareStatement("select email,password,role from users");
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next())
            {
                DEmail = resultSet.getString("email");
                DPass = resultSet.getString("password");
                role = resultSet.getString("role");
            }
            if(email.equals(DEmail) && BCrypt.checkpw(password, DPass) && role.equals("USER"))
                return "USER_ROLE";
            if(email.equals(DEmail) && BCrypt.checkpw(password, DPass) && role.equals("FROZEN"))
                return "FROZEN_ROLE";
            if(email.equals(DEmail) && BCrypt.checkpw(password, DPass) && role.equals("ADMIN"))
                return "ADMIN_ROLE";
        }
        catch (SQLException e) {
            e.printStackTrace();
        }  finally {
            conn.close();
            resultSet.close();
        }

        return "Invalid Credentials, try again";

    }

    public boolean checkIfAccountExists(String sEmail) throws SQLException
    {


        try {
            conn = JDBCConnection.getConnection();
            preparedStatement = conn.prepareStatement("select * from users where email = 'sEmail'");
            resultSet = preparedStatement.executeQuery();

            if(resultSet.next())
            {
                return true;
            }

        }
         catch (SQLException e)
        {
            e.printStackTrace();
        } finally {
            conn.close();
            resultSet.close();
        }

        return false;
    }

    public boolean createAccount(String username, String email, String password, String IP) throws SQLException
    {

        try {
            conn = JDBCConnection.getConnection();
            preparedStatement = conn.prepareStatement("Insert into Users (username,email,password,last_IP)");
            resultSet = preparedStatement.executeQuery();

            if(resultSet.next())
            {
                return true;
            }

        }
        catch (SQLException e)
        {
            e.printStackTrace();
        } finally {
            conn.close();
            resultSet.close();
        }
        return false;
    }
}
