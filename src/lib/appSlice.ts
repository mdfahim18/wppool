import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  isSidebarOpen: boolean;
}
const initialState = {
  isSidebarOpen: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
