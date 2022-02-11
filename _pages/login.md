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
<h2>Lab Personnel Only!</h2>
<form id="form_id" method="post" name="myform">
<label>User Name :</label>
<input type="text" name="username" id="username"/><br>
<label>Password       :</label>
<input type="password" name="password" id="password"/><br>
<input type="button" value="Login" id="submit" onclick="validate()"/>
</form>
<span><b class="note">Note : </b>For this demo use following username and password. <br/><b class="valid">User Name : Formget<br/>Password : formget#123</b></span>
</div>
</div>

<script>
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){

window.location = "{{ site.url }}{{ site.baseurl }}/labdata.html";  
  }
 else{
  alert ("Login Unsuccessfull!");
  }
  }
</script>

</body>
</html>
