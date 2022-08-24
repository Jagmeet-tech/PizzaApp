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

export {setItem,getItem};