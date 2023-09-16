const body = document.querySelector("body")
const darkButton = document.querySelector(".dark-container")
const darkIcon = document.querySelector(".fa-moon")

darkButton.addEventListener("click", () => {
    darkButton.classList.toggle("dark")
    if (darkButton.classList.contains("dark")) {
        body.style = `background-color: #212121; color: white; `
        darkButton.style.backgroundColor = "white"
        
    } else {
        body.style = `background-color: #white; color: #black;`
        darkButton.style.backgroundColor = "#212121"
        
    }
 })