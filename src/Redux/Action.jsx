import { setData } from './Slice';
import axios from 'axios';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3005/filmler');
    dispatch(setData(response.data));
  } catch (error) {
    console.error('Veriler getirilirken hata oluştu:', error);
  }
};

export const fetchMovies = () => async (dispatch) =>{
  try{
    const response = await axios.get('http://localhost:3005/diziler');
    dispatch(setData(response.data));
  } catch(error) {
    console.error('Veriler getirilirken hata oluştu', error);
  }
}