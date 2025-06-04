  window.onload = () => {
      const notif = document.getElementById("krabsnoti");
      notif.classList.add("show");
      setTimeout(() => {
          notif.classList.remove("show");
          setTimeout(() => {
              notif.style.display = "none";
          }, 600);
      }, 5000);
  };