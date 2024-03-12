"use client";
import { RecoilRoot, atom } from "recoil"; 
// import Appbar from "../components/Appbar";
// import * from "@repo/store/src/index"; 
import { isUserLoading } from "@repo/store/src/selectors/isUserLoading"; 
import { userState } from "@repo/store/src/atoms/user";
import { userEmailState } from "@repo/store/src/selectors/userEmail"; 
// import courseState from "@repo/store/src/atoms/course"

// export const todoListState = atom({
//   key: "TodoList",
//   default: [],
// });

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot> 
        {children} 
    </RecoilRoot>;
}