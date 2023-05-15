import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getNeedfulData = createAsyncThunk(
    'mainReducer/getAllData',
    async (_, {rejectWithValue, getState, dispatch})=>{
        try{
            const res = await axios.get(`tag?collectionName=Airlines&token=sk_fd68d4fb4b774519a5e079c4d14010cf`);

            if(res.status !== 200){
                throw new Error('Server Error!');
            }
            
            const pageFrom = getState().mainReducer.pageFrom;
            const pageTo = getState().mainReducer.pageTo;

            dispatch(setData(res.data.filter((_, id)=>id >= pageFrom && id < pageTo)));
            dispatch(setIsPreload(false));
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

export const getAllData = createAsyncThunk(
    'mainReducer/getAllData',
    async (_, {rejectWithValue, dispatch})=>{
        try{
            const res = await axios.get(`tag?collectionName=Airlines&token=sk_fd68d4fb4b774519a5e079c4d14010cf`);

            if(res.status !== 200){
                throw new Error('Server Error!');
            }

            dispatch(setData(res.data));
            dispatch(setIsPreload(false));
        }catch(err){
            return rejectWithValue(err.message);
        }
    }
)

const mainReducer = createSlice({
    name: 'mainReducer',
    initialState: {
        data: [],
        dataLength: 0,
        pageFrom: 0,
        pageTo: 10,
        currentPage: 1,
        tableStatus: 'needful',
        isPreload: false
    },
    reducers: {
        setData: (state, action)=>{
            state.data = action.payload;
        },
        setDataLength: (state, action)=>{
            state.dataLength = action.payload;
        },
        setTableStatus: (state, action)=>{
            state.tableStatus = action.payload;
        },
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload;
        },
        setPageFrom: (state, action)=>{
            state.pageFrom = (action.payload-1) * 10;
        },
        setPageTo: (state, action)=>{
            state.pageTo = action.payload * 10;
        },
        setIsPreload: (state, action)=>{
            state.isPreload = action.payload;
        }
    }
})

export default mainReducer.reducer;
export const {
    setData, setDataLength, setCurrentPage, 
    setPageFrom, setPageTo, setTableStatus, 
    setIsPreload
} = mainReducer.actions;