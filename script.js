const numberRegex = /^[0-9]+$/;
const inputfield = document.getElementById("inputfield")

inputfield.addEventListener('keypress', function(event){
    if (!numberRegex.test(event.key)){
       event.preventDefault()
    } 
    console.log(event.key)
})
