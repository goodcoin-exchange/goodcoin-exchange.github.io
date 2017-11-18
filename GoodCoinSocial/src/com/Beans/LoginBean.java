package com.Beans;

public class LoginBean {
    private String sEmail;
    private String sPassword;


    public void setsEmail(String sEmail) {
        this.sEmail = sEmail;
    }

    public String getsPassword() {
        return sPassword;
    }

    public void setsPassword(String sPassword) {
        this.sPassword = sPassword;
    }

    public String getEmail()
    {
        return sEmail;
    }
}
