package com.Servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

import com.Beans.LoginBean;
import com.goodcoin.Login;

@WebServlet(name = "login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String sEmail = request.getParameter("email");
        String sPassword = request.getParameter("password");

        LoginBean loginBean = new LoginBean();

        loginBean.setsEmail(sEmail);
        loginBean.setsPassword(sPassword);

        Login login = new Login();

        try {
            System.out.println("Got this far");
            request.getRequestDispatcher("/login.jsp").forward(request,response);


            String userAuth = login.authenticateCredentials(loginBean);

            if(userAuth.equals("USER_ROLE"))
            {
                HttpSession session = request.getSession();
                session.setAttribute("User", sEmail);
                request.setAttribute("email", sEmail);

                request.getRequestDispatcher("/login.jsp").forward(request,response);
            }
            else
            {
                System.out.println("Error: " + userAuth);
                request.setAttribute("errMessage", userAuth);
                request.getRequestDispatcher("/login.jsp").forward(request,response);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
