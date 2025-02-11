import { createSlice } from "@reduxjs/toolkit";

type AccountPageType = {
  isOpenAccountDrawer: boolean;
  onOpenAccountDrawer: () => void;
  onCloseAccountDrawer: () => void;
  openAddTransactionDrawer: boolean;
};

const initialState: AccountPageType = {
  isOpenAccountDrawer: false,
  onOpenAccountDrawer: () => {},
  onCloseAccountDrawer: () => {},
  openAddTransactionDrawer: false,
};

const AccountsPageSlice = createSlice({
  name: "AccountPageSlice",
  initialState,
  reducers: {
    toggleAccountDrawer: (state) => {
      state.isOpenAccountDrawer = !state.isOpenAccountDrawer;
    },
  },
});
