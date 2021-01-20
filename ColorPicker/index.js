const colors = ["green","red","#f15025","rgba(133,122,200"]

const btn = document.getElementById("btn")
const color = document.querySelector('.color')


btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})
 const getRandomNumber =() =>{
    return parseInt(Math.random()*colors.length)

 }