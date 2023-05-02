import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    id: null,
    isauth: false,
    name: null,
    total: null,
    weekmoney: [],
};


export const getUser = createAsyncThunk(
    
    'user/getUser',
    async function(id, {rejectWithValue, dispatch}) {
        
        try {
            const response = await fetch(`http://127.0.0.1:5000/que/${id}`, {
                method: 'GET',
            })
            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }
            const data = await response.json();
            dispatch(setUser(data))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewTotal = createAsyncThunk(
    'user/addNewTotal',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const user = {
                id:text,
                method:"money",
            };

            const response = await fetch('http://127.0.0.1:5000/que', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(setTotal(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const resetTotal = createAsyncThunk(
    'user/resetTotal',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const user = {
                id:text,
                method:"reset",
            };

            const response = await fetch('http://127.0.0.1:5000/que', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(setTotal(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getMoney = createAsyncThunk(
    'user/getMoney',
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`http://127.0.0.1:5000/money/${id}`, {
                method: 'GET',
            })
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const data = await response.json();
    
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const addMoneyToday = createAsyncThunk(
    'user/addMoneyToday',
    async function (users, {rejectWithValue, dispatch}) {
        try {
            const user = {
                id: users["id"],
                money: users["money"],
            }

            const response = await fetch('http://127.0.0.1:5000/money', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const userSlice = createSlice({

    
    name: "user",
    initialState,
    reducers: {
        setUser(state, action){
            state.id = action.payload.id;
            state.isauth = action.payload.isauth;
            state.name = action.payload.name;
            state.total = action.payload.total;
        },
        setTotal(state, action){
            state.total = action.payload.total;
        },
        getWeekMoney(state, action){
            state.weekmoney.push(action.payload)
        }

    },
    extraReducers: {
        [getMoney.fulfilled]: (state, action) => {
            state.weekmoney = action.payload;
        },
    },

})

export const {setUser, setTotal, getWeekMoney} = userSlice.actions;


export default userSlice.reducer;
