package com.Servlets;

import com.goodcoin.Login;
import com.util.BCrypt;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "CreateAccount")
public class CreateAccountServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Login login = new Login();

        request.setAttribute("username",request.getParameter("sUsername"));
        request.setAttribute("email",request.getParameter("sEmail"));
        request.setAttribute("password",request.getParameter("sPassword"));
        request.setAttribute("IP_ADDRESS", request.getLocalAddr());
        try {
            if (login.checkIfAccountExists(request.getParameter("sEmail"))) {
                login.createAccount(request.getParameter("sUsername"), request.getParameter("sEmail"), BCrypt.hashpw(request.getParameter("sPassword"), BCrypt.gensalt(5)), request.getParameter("IP_ADDRESS"));
                request.getRequestDispatcher("/index.jsp").forward(request,response);
            }
        } catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
