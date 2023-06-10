const form = document.querySelector("form")
form.addEventListener("submit", expont)

function expont (event) {
    event.preventDefault()
    const base = Number(event.target.base.value)
    const power = Number(event.target.power.value)
    const result = base**power
    document.querySelector("h2").innerText =   + base + " to the power of " + power + " = " + result +"!"

}