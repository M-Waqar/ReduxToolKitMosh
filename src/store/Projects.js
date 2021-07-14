import { createSlice } from "@reduxjs/toolkit";

let lastid = 0;
const slice = createSlice({
  name: "Projects",
  initialState: [],
  reducers: {
    AddProject: (projects, action) => {
      projects.push({ id: ++lastid, name: action.payload.name });
    },
    DeleteProject: (projects, action) => {
      const index = projects.findIndex(
        (project) => project.id === action.payload.id
      );
      projects.splice(index, 1);
    },
  },
});

export const { AddProject, DeleteProject } = slice.actions;
export default slice.reducer;
