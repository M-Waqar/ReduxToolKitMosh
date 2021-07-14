import { createSlice } from "@reduxjs/toolkit";
let lastid = 0;
const slice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    AddUser: (users, action) => {
      users.push({ id: ++lastid, name: action.payload.name });
    },
    DeleteUser: (users, action) => {
      const index = users.findIndex((user) => user.id === action.payload.id);
      users.splice(index, 1);
    },
  },
});

export const { AddUser, DeleteUser } = slice.actions;
export default slice.reducer;
