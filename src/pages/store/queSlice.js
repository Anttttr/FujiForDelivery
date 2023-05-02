import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQue = createAsyncThunk(
    'que/fetchQue',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://127.0.0.1:5000/que');
            
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

export const deleteQue = createAsyncThunk(
    'que/deleteQue',
    async function(id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`http://127.0.0.1:5000/que/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t delete task. Server error.');
            }


            dispatch(removeQue({id}));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewQue = createAsyncThunk(
    'que/addNewQue',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const que = {
                id:text,
                method:"que",
            };

            const response = await fetch('http://127.0.0.1:5000/que', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(que)
            });

            if (!response.ok) {
                throw new Error('Can\'t add task. Server error.');
            }

            const data = await response.json();
            dispatch(addQue(data));

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const queSlice = createSlice({
    name: 'que',
    initialState: {
        que: [],
        status: null,
        error: null,
    },
    reducers: {
        addQue(state, action) {
            state.que.push(action.payload);
        },
        removeQue(state, action) {
            state.que = state.que.filter(ques => ques.id !== String(action.payload.id));
        }
    },
    extraReducers: {
        [fetchQue.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchQue.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.que = action.payload;
        },
        [fetchQue.rejected]: setError,
        [deleteQue.fulfilled]: (state) =>{
            state.status = 'deleted';
        },
        [deleteQue.rejected]: setError,
    },
});

const {addQue, removeQue} = queSlice.actions;

export default queSlice.reducer;