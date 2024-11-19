import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateProps {
  drawerOpen: boolean;
}

const initialState: InitialStateProps = {
  drawerOpen: true,
};

const systemSlice = createSlice({
  name: "systemSlice",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { toggleDrawer } = systemSlice.actions;
export default systemSlice.reducer;
