import {FETCH_DATA} from "../constant/Reducer";

export const asyncFetchData = () => async (dispatch) => {
  console.log("Fetching Data...");
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  dispatch({ type: FETCH_DATA, payload: data });
  return data;
}
