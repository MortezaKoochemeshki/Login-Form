let eyeImg = document.querySelector('#login .password-container .pass-visibility');
let passInput = document.querySelector('#login .password-container .pass-input');

passInput.addEventListener('keyup', function(){ 
    let passInputLength = passInput.value.length;
    
    if(passInputLength == 0){
        eyeImg.style.display = 'none';
    } else {
        eyeImg.style.display = 'inline-block';
    }

});

function myFunction(){
    let passInputType = passInput.getAttribute('type');
    console.log(passInputType);

    if(passInputType == 'password'){
        passInput.setAttribute('type', 'txt');
        eyeImg.setAttribute('src','../Pictures/invisible-eye.png');
    } else{
        passInput.setAttribute('type', 'password');
        eyeImg.setAttribute('src', '../Pictures/visible-eye.png');
        console.log(passInput);
    }
}

eyeImg.addEventListener('click', myFunction);
