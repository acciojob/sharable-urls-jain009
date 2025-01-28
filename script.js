// your code here
const button = document.getElementById("button");
    const urlElement = document.getElementById("url");

    button.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const year = document.getElementById("year").value.trim();

      let queryString = "https://localhost:8080/";
      const params = [];

      if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
      }

      if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
      }

      if (params.length > 0) {
        queryString += "?" + params.join("&");
      }

      urlElement.textContent = queryString;
    });