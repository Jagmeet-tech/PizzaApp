const setItem = (obj)=>{
    return {
        type : "SET_ITEM",
        payload:obj
    }
}

const getItem  = ()=>{
    return {
        type : "GET_ITEM"
    }
}

const removeItem = (obj)=>{
    return {
        type : "REMOVE_ITEM",
        payload:obj
    }
}

export {setItem,getItem,removeItem};