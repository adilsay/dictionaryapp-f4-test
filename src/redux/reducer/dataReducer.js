
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const dataReducer = (state=initialState , action)=>{

    switch(action.type){
        case 'FETCH_DATA_LOADING' :
            return {
                ...state , loading: true , data: null , error: null ,
            }
        case 'FETCH_DATA_SUCCESS' :   
        return{
            ...state ,loading : false , data : action.payload , error: null,
        }

        case 'FETCH_DATA_ERROR' : 
        return {
            ...state ,loading : false, data : null , error:action.payload,
        }
        default : 
        return state;
    }
}


export default dataReducer;