import { createSlice } from "@reduxjs/toolkit";

type AccountPageType = {
  isOpenAccountDrawer: boolean;
  onOpenAccountDrawer?: () => void;
  onCloseAccountDrawer?: () => void;
  openAddTransactionDrawer: boolean;
};

const initialState: AccountPageType = {
  isOpenAccountDrawer: false,
  openAddTransactionDrawer: false,
};

const accountsPageSlice = createSlice({
  name: "AccountPageSlice",
  initialState,
  reducers: {
    toggleAccountDrawer: (state) => {
      state.isOpenAccountDrawer = !state.isOpenAccountDrawer;
    },
  },
});

export const { toggleAccountDrawer } = accountsPageSlice.actions;
export default accountsPageSlice.reducer;
