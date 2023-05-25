const input = document.querySelector('input')
let temp = []
document.querySelectorAll('.number').forEach((number_btn)=>{
    number_btn.addEventListener('click', (e)=>{
        e.preventDefault()
        if(number_btn.textContent == '.'){
            if(!input.value.includes('.')){
                input.value = input.value+number_btn.textContent
            }
        }else{
            input.value = parseFloat(input.value+number_btn.textContent)
        }
    })
})
const operators = []
document.querySelectorAll('.operator').forEach((operator_btn)=>{
    operator_btn.addEventListener('click', (e)=>{
        e.preventDefault()
        temp.push(parseFloat(input.value))
        document.querySelector('.preview').textContent = temp.join(' ')        
        let operator = operator_btn.textContent.toLocaleLowerCase()
        if(operator == '='){
            let op =  temp.join('')
            temp = []
            let result = eval(op) 
            input.value = result
        }else{
            temp.push(operator)
            input.value = 0
        }
    })
})

document.querySelector('.del').addEventListener('click', (e)=>{
    e.preventDefault()
    let str = input.value
    str = str.slice(0, str.length - 1)
    if(!str.length) str = '0'
    input.value = str

})

document.querySelector('.reset').addEventListener('click', (e)=>{
    e.preventDefault()
    temp = []
    input.value = 0
    document.querySelector('.preview').textContent = ''        
})

document.querySelector('.negative').addEventListener('click', (e)=>{
    e.preventDefault()
    if(input.value != '0'){
        if(!input.value.includes('-')){
            input.value = '-'+input.value
        }else{
            input.value = input.value.substr(1)
        }
    }
})



