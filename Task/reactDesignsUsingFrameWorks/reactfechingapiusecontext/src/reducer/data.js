import { FETCH_DATA, TOGGLE_BOOKMARK, TOGGLE_UNBOOKMARK } from "../constant/Reducer";

export default (data = [], action) => {
    switch (action.type) {
        case FETCH_DATA:  
            return {
                ...data,
                data: action.payload.map(item => ({
                    ...item,
                    bookmark: false,
                })),
            };
        case TOGGLE_BOOKMARK:
            return {
                ...data,
                data: data.data.map(item =>
                    item.id === action.payload ? { ...item, bookmark: true } : item
                ),
            };
        case TOGGLE_UNBOOKMARK:
            return {
                ...data,
                data: data.data.map(item =>
                    item.id === action.payload ? { ...item, bookmark: false } : item
                ),
            };
        default:
            return {
                ...data,
            };
    }
}