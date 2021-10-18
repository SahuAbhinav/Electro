package com.ecomm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.ecomm.enumeration.UserType;


@Entity
@Table(schema = "public", name = "user")
public class User {

	@Id
	@SequenceGenerator(name = "USER_ID_GENERATOR", sequenceName = "USER_ID_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "USER_ID_GENERATOR")
	private Long id;

	@Column(name ="firstname")
	private String firstName;

	@Column(name ="lastname")
	private String lastName;

	private String email;

	@Column(name ="mobileno")
	private String mobileNo;

	@Enumerated(EnumType.ORDINAL)
	@Column(name = "usertype")
	private UserType userType;

	@Column(name ="username")
	private String userName;

	private String password;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}

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
		return String.format(
				"User [id=%s, firstName=%s, lastName=%s, email=%s, mobileNo=%s, userType=%s, userName=%s, password=%s]",
				id, firstName, lastName, email, mobileNo, userType, userName, password);
	}

	
}
