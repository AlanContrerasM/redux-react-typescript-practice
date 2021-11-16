import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';


export interface tasksState {
  tasks: task[];
}

export interface task {
    id: string;
    title: string | undefined;
    comments: string | undefined;
    editable: boolean;
}

const initialState: tasksState = {
  tasks: [],
};



export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTask: (state, action: PayloadAction<task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task)=>task.id !== action.payload);
    },
    editTask: (state, action: PayloadAction<task>) => {
      state.tasks = state.tasks.map((task)=>task.id !== action.payload.id ? task : action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectTaskCount = (state: RootState) => state.tasks.tasks.length;



export default tasksSlice.reducer;
