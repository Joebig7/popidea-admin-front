// 登录
$("#loginButton").click(function (e) {
  e.preventDefault();

  let username = $("#username").val();
  let password = $("#password").val();

  console.log(`username:${username} password:${password}`);

  axios
    .get(
      "http://localhost:8880/popidea/v1/users/auth?username=" +
        username +
        "&password=" +
        password
    )
    .then(function (response) {
      console.log(response.data.data);
      localStorage.setItem("auth", "Bearer " + response.data.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      window.location.href = "../html/dashboard.html";
    });
});
