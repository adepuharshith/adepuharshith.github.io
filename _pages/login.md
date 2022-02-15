---
title: "Login"
layout: page
permalink: /login/
---

<html>
<head>
<style>
body{
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: centre;
  font-family: sans-serif;
}
.loginbox{
  width: 320 px;
  height: 420 px;
  background: #000;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  trnasform: translate(-50%,-50%);
  box-sizing: border-box;
  padding: 70px 30px;
}
.avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(50%-50px);
}
h1{
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}
.loginbox p{
  margin: 0;
  padding: 0;
  font-weight: bold;
}
.loginbox input{
  width: 100%;
  margin-bottom: 20px;
}
.loginbox input[type="text"], input[type="password"]
{
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40 px;
  color: #fff;
  font-size: 16px;
}
.loginbox input[type="submit"]{
  border: none;
  outline: none;
  height: 40px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
}  
.loginbox input[type="submit"]:hover{
  cursor: pointer;
  background: #ffc107;
  color: #000;
}
.loginbox a{
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgrey;
}  
.loginbox a:hover{
  color: #ffc107;
}
</style>
  
<title>lab</title>
  
<body>
  <div class="loginbox">
  <img src="nopic.jpg" class="avatar">
    <h1>Login</h1>
    <form>
      <p>Username</p>
      <input type="text" name="username" id="username" placeholder="Enter Username">
      <p>Password</p>
      <input type="password" name="password" id="password" placeholder="Enter Password">
      <input type="submit" value="Login" id="submit" onclick="validate()"/>
    </form>
  </div>
  </div>
</head>
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

    
</body>

</html>
