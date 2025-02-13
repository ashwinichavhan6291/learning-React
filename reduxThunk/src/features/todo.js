import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodos= createAsyncThunk("fetchTodos" ,async ()=> {
    const response = await fetch(" https://jsonplaceholder.typicode.com/todos");
    return response.json();
})
const initialState={
    isLoading:false,
    data:null,
    isError:false
}

const todoSlice=createSlice({
    name :" todo",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending, (state,action)=>{
            state.isLoading=true,
            state.data=null

        })
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.data=action.payload;
        }),
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log("Error" , action.payload);
            state.isLoading=false,
          
            state.isError=true;
        })
    }
})
export default todoSlice.reducer;