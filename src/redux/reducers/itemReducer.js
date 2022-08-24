const initialState = [ 
]

const itemReducer = (state = initialState,{type,payload})=>{

    switch(type){
        case "SET_ITEM":{
            console.log(payload);
            let newArr = state.filter((obj)=>{
                return obj.id !== payload.id;
            })
            return [
                ...newArr,payload
            ]
        }
        case "GET_ITEM":
            return [
                ...state
            ]    
    }
}

export default itemReducer;