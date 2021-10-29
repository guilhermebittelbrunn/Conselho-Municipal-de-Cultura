login = document.getElementsByClassName('login')[0]
cadastro = document.getElementsByClassName('cadastro')[0]
fim = document.getElementsByClassName('finish')[0]
pass = document.getElementsByClassName('senha')[0]

function show(){
    login.style.display = 'none';
    cadastro.style.display = 'flex';
}

function retorno(){
    cadastro.style.display = 'none';
    login.style.display = 'none';
    fim.style.display = 'flex';
    pess.style.display = 'none';
}


function senha(){
    cadastro.style.display = 'none';
    login.style.display = 'none';
    pass.style.display = 'flex';
}