import  {createSlice, nanoid} from "@reduxjs/toolkit";
const  initialState = [
    {
        id:"1",
        fullName:"سجاد غیاثوند",
    },
    {
        id:"2",
        fullName:"ترنم مطلق",
    },

];

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{}
});

export default usersSlice.reducer;