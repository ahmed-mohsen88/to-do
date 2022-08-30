document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#submt").disabled = true;
    document.querySelector("#task").onkeyup = function () {
      if (document.querySelector("#task").value.length > 5) {
        document.querySelector("#submt").disabled = false;
      } else {
        document.querySelector("#submt").disabled = true;
      }
    };
    document.querySelector("form").onsubmit = function () {
      var task = document.querySelector("#task").value;
      var li = document.createElement("li");
      li.innerHTML = task;
      document.querySelector("#tasks").appendChild(li);
      document.querySelector("#task").value = "";
      document.querySelector("#submt").disabled = true;
      return false;
    };
  });