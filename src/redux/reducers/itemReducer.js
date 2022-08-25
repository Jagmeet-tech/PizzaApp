const initialState = [ 
]

const itemReducer = (state = initialState,{type,payload})=>{

    switch(type){
        case "SET_ITEM":{
            console.log(payload);
            let newArr = state.filter((obj)=>{
                 if(obj.id === payload.id){
                    return obj.size === payload.size && obj.toppings === payload.toppings ? false : true
                 }
                 return true;
            })
            return [
                ...newArr,payload
            ]
        }
        case "GET_ITEM":
            return [
                ...state
            ] 
            
        case "REMOVE_ITEM":{
            let newArr = state.filter((obj)=>{
                if(obj.id === payload.id){
                   return obj.size === payload.size && obj.toppings === payload.toppings ? false : true
                }
                return true;
           })
           return [
               ...newArr
           ]
        }

    }
}

export default itemReducer;