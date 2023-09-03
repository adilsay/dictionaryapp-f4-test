import axios from 'axios';

export const fetchDataLoading = () => ({
    type: 'FETCH_DATA_LOADING',
  });
  
  export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });
  
  export const fetchDataError = (error) => ({
    type: 'FETCH_DATA_ERROR',
    payload: error,
  });
  


export const fetchData = (word) =>(dispatch) =>{
    dispatch(fetchDataLoading());

    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) =>{
        dispatch(fetchDataSuccess(response.data));
        console.log(response.data);
    })
    .catch((error)=>{
        dispatch(fetchDataError(error));
    })
}
