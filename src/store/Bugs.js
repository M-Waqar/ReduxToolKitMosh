import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastid = 0;
const slice = createSlice({
  name: "Bugs",
  initialState: [],
  reducers: {
    // Action : Action / Event Handlers
    BugAdded: (bugs, action) => {
      bugs.push({ id: ++lastid, desc: action.payload.desc, resolved: false });
    },
    BugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
    BugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    BugToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

export const { BugAdded, BugRemoved, BugResolved, BugToUser } = slice.actions;
export default slice.reducer;

export const bugByUserSelector = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

// Selector
// export const unResolveBugsSelector = (state) => {
//   return state.entities.bugs.filter((bug) => bug.resolved === false);
// };

// Memorization - Selector with cache data - Install package reselect
export const unResolveBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

/* CREATE ACTION CONCEPT
const action = createAction("BugUpdated");
console.log(action);
console.log(action({ id: 1 }));
console.log(action.type);
console.log(action.toString());
CREATE REDUCER CONCEPT
createReducer([],{
    //Key: Action Name -- CteateAction Name
    //Value: Method to handle that action
    BugAdded: (bugs, action) => {
        bugs.push({ id: ++lastid})
    }
})
*/
/*
export const BugAdded = createAction("BugAdded");
export const BugRemoved = createAction("BugRemoved");
export const BugResolved = createAction("BugResolved");
let lastid = 0;
export default createReducer([], {
  [BugAdded.type]: (bugs, action) => {
    bugs.push({ id: ++lastid, desc: action.payload.desc, resolved: false });
  },
  [BugRemoved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs.splice(index, 1);
  },
  [BugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});*/
/*let lastid = 0;
const Reducer = (state = [], action) => {
  switch (action.type) {
    case BugAdded.type:
      return [
        ...state,
        { id: ++lastid, desc: action.payload.desc, resolved: false },
      ];
    case BugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BugResolved.type:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
};*/
/*// Action Types
const BUG_ADDED = "BugCreated";
// Action Creator
export const BugAdded = (desc) => {
  return {
    type: BUG_ADDED,
    payload: {
      desc,
    },
  };
};
// Reducer
let lastid = 0;
const Reducer = (state = [], action) => {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        { id: ++lastid, desc: action.payload.desc, resolved: false },
      ];
    default:
      return state;
  }
};*/
