package com.goodcoin;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import com.Beans.LoginBean;
import com.util.BCrypt;
import com.util.JDBCConnection;


public class Login {
    public String authenticateCredentials(LoginBean loginBean)
    {
        String email = loginBean.getEmail();
        String password = loginBean.getsPassword();



        Connection conn = null;
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;

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

    }

        return "Invalid Credentials, try again";

    }
}
