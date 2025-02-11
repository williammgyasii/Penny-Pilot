"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { toggleAccountDrawer } from "@/redux/features/accountsPageSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function AccountSheetComponent() {
  const { isOpenAccountDrawer } = useSelector(
    (state: RootState) => state.accounts
  );
  const dispatch = useDispatch();
  return (
    <Sheet
      onOpenChange={() => dispatch(toggleAccountDrawer())}
      open={isOpenAccountDrawer}
    >
      <SheetTrigger>Trigger Account Sheet Module</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
