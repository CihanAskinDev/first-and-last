const form = document.querySelector("form")
form.addEventListener("submit", firNLas)

function firNLas(event) {
    event.preventDefault()
    const fname = (event.target.fname.value)    
    const lname = (event.target.lname.value) 
    document.querySelector("h2").innerText = "Hello, " + fname + "" + lname + "!"
  

}
