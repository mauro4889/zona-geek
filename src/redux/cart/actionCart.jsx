export const AGREGAR = 'AGREGAR'
export const BORRAR = 'BORRAR'
export const REMOVER = 'REMOVER'

export const agregarCart = id => {
    return {
        type: AGREGAR,
        payload: id
    }
}

export const limpiarCart = () => {
    return{
        type: BORRAR
    }
}

export const removerProducto = id =>{
    return{
        type: REMOVER,
        payload: id
    }
}