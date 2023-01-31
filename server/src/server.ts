type Usuario = {
    idade: number
}

function mostraIdadeDoUsuario(usuario: Usuario) {
    return usuario.idade
}

const usuario = {
    name: "Diego",
}

mostraIdadeDoUsuario(usuario)