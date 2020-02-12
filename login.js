var webAuth = new auth0.WebAuth({
  domain:       'hpbots.auth0.com',
  clientID:     'K73x4xqAqIa8UIIeJHkwh4OOnKORMJwF',
  redirectUri: 'https://hpbotss.auth0.com/authorize',
  responseType: 'code'
});

function login(){
  var email = $('#login-email').val();
  var code = $('#login-token').val();
  $.post("https://hpbots.com/token_manager/JRA/api_accountManager.php", {action: "verifyToken", token: code}, function(data){
    if( data != ""){
      alert("login successful");
      chrome.browserAction.setPopup({popup: "popup.html"});
    } else{
      alert("Token invalid");
    }
  })
  // webAuth.passwordlessVerify({
  //   connection: 'email',
  //   email: email,
  //   verificationCode: code
  // }, function (err,res) {
  //   if (xhr.status == 200) {
  //     alert("login successful");
  //     chrome.browserAction.setPopup({popup: "popup.html"});
  //   } 
  //   if (err) { 
  //     alert("Token invalid");
  //   }
  // });
}

$(function() {
  $("#open_test").click(function() {
    window.open("test_code.html"); 
  })
})

$(function() {
  $("#btn-login").click(function() {
    login();
  });
});