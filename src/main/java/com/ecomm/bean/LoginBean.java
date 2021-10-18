package com.ecomm.bean;

import javax.validation.constraints.NotBlank;

public class LoginBean {

	@NotBlank
	private String userName;

	@NotBlank
	private String password;

	

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return String.format("LoginBean [userName=%s, password=%s]", userName, password);
	}
}
