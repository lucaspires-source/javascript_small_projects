
//Set initial count
let count = 0;

//select value and buttond

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        e.preventDefault()
        const styles = e.currentTarget.classList
        if(styles.contains ('decrease')){
            count--
            value.textContent=count
        }
        if(styles.contains ('increase')){
            count++
            value.textContent=count
        }
        if(styles.contains ('reset')){
            count = 0
            value.textContent=count
        }
    })
})

