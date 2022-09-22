export const AGREGAR = 'AGREGAR'
export const BORRAR = 'BORRAR'
export const REMOVER = 'REMOVER'
export const ELIMINAR = 'ELIMINAR'

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

export const eliminarProducto = id =>{
    return{
        type: ELIMINAR,
        payload: id
    }
}