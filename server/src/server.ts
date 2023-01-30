type Usuario = {
    idade: number
}

function mostraIdadeDoUsuario(usuario) {
    return usuario.idade
}

const usuario = {
    name: "Diego",
}

mostraIdadeDoUsuario(usuario)