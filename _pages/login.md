---
title: "Login"
layout: page
permalink: /login/
---

<html>
<head>
<title>Only lab personnel</title>
<!-- Include CSS File Here -->
<link rel="stylesheet" href="css/style.css"/>
<!-- Include JS File Here -->
<script src="login.js"></script>
</head>
  
<body>
<div class="container">
<div class="main">
<h1 class="label">Lab Personnel Login</h1>
  
<form id="form_id" method="post" name="myform">
  <label>User Name</label>
<input type="text" name="username" id="username"/><br>
<label>Password</label>
<input type="password" name="password" id="password"/><br>
<input type="button" value="Login" id="submit" onclick="validate()"/>
</form>


</div>
</div>

<script>
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "adminchoi" && password == "choi@1067"){

window.location = "{{ site.url }}{{ site.baseurl }}/labdata.html";  
  }
 else{
  alert ("Login Unsuccessfull!");
  }
  }
</script>

  
<style>
*{
  padding: 0;
  margin: 0;
}
body{
  background-size: cover;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: sans-serif;
}
.container{
  position: relative;
  margin-top: 100px;
  width: 450 px;
  height: auto;
  background: #dedede;
  border-radius:5;
}
.label{
  padding: 20px 130px;
  font-size: 35px;
  font-weight: bold;
  color: #130f40;
}
.login_form{
  padding: 20px 40px;
}
.login_form.font{
  font-size: 18px;
  color: #130f40;
  margin: 5px 0;
}
.login_form input{
  height: 40 px;
  width: 350px;
  padding: 0 5px;
  font-size: 18px;
  outline: none;
  border: 1 px solid silver;
}
.login_form.font2{
  margin-top: 30px;
}  
.login_form button{
  margin: 45px 0 30px 0;
  height: 45px;
  width: 365px;
  font-size: 20px;
  color: white;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  background: #1A237E;
  border-radius: 3px;
  border: 1px solid #3949AB;
  transition: .5s;
}
.login_form button:hover{
  background: #151c6a
}
  
</style>
  
  
  
  
  
  
  
</body>
</html>
