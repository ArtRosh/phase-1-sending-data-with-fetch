// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json()) // Парсим JSON-ответ
    .then(data => {
      console.log("✅ Успешный ответ:", data);
      // Создаем новый элемент <p> и добавляем в DOM
      const idElement = document.createElement("p");
      idElement.textContent = `ID пользователя: ${data.id}`;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      console.error("❌ Ошибка запроса:", error.message);
      // Добавляем сообщение об ошибке в DOM
      const errorElement = document.createElement("p");
      errorElement.textContent = `Ошибка: ${error.message}`;
      errorElement.style.color = "red";
      document.body.appendChild(errorElement);
    });
  }
  
  // Тестовый вызов функции
  // submitData("John Doe", "johndoe@example.com");