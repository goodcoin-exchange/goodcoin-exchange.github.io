<%--
  Created by IntelliJ IDEA.
  User: davidmoyer
  Date: 11/15/17
  Time: 9:32 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
</head>
<body>
<form name="form" action="<%=request.getContextPath()%>
/LoginServlet" method="post">

    <table align="center">

        <tr>
            <td>Username</td>
            <td><input type="text" name="username" /></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="text" name="password" /></td>
        </tr>
        <tr>
            <td><span style="color:red"><%=(request.getAttribute("errMessage") == null) ? "" : request.getAttribute("errMessage")%></span></td>
        </tr>
        <tr>
            <td></td>
            <td><input type="submit" value="Login"></input><input type="reset" value="Reset"></input></td>
        </tr>
    </table>
</form>
</body>
</html>