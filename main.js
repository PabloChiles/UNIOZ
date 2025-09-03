function mostrarSenha() {
    var inputPass = document.getElementById('eye_password')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash')
    }else {
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye-fill')
    }
}

let passwords = document.querySelectorAll('.pass');
        let checkbox = document.getElementById('checkbox');

            checkbox.onclick = function(){
                passwords.forEach(function(passwords) {
                    if (checkbox.checked) {
                        passwords.type = 'text';
                    }else {
                        passwords.type = 'password';
                    }
                });
            }