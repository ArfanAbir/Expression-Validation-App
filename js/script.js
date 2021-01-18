let form = document.querySelector('.inputForm')
let option = document.querySelector('#option')
let postalCodeRexp  = /^[0-9]{4}$/;
let phoneNumRexp = /^(\+)?(88)?01[0-9]{9}$/;
let emailRexp = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ 
let output = document.querySelector('.output')
let result = document.querySelector('#result')




form.addEventListener('submit', e =>{
    
    let loadingImage = document.querySelector('#loading');
    let result = document.querySelector('#result')
    

    let optionValue = option.value 
    optionValue = parseInt(optionValue)
    let inputValue = document.querySelector('#input').value

    
    switch(optionValue){
        case 1:
            if(phoneNumRexp.test(inputValue)){
                showAlert("It's a Bangladeshi Mobile Number!")
            }
            else{
                showAlert('Not Bangladeshi Number Or Invalid Number')
            }

            break;
        case 2:
            if(postalCodeRexp.test(inputValue)){
                showAlert('Your Postal Code is Valid!')
            }else{
                showAlert('InValid Postal Code')
            }
    
            break;
        case 3:

            if(emailRexp.test(inputValue)){
                showAlert('Valid Email')
            }else{
                showAlert('InValid Email')
            }
            break;
        default : 
        showAlert("You didn't Selected any Option");
    }

    // show loading Image
    loadingImage.style.display = 'block'

    // hide result

    result.style.display = 'none'

    setTimeout(() =>{


    loadingImage.style.display = 'none'

    result.style.display = 'block'



    


    },2000);
    
    
    document.querySelector('#input').value = ''
    e.preventDefault()
})


function showAlert(msg){
    output.innerHTML = msg
}