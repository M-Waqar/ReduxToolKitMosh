import ConfigStore from "./store/ConfigureStore";
import {
  BugAdded,
  BugRemoved,
  BugResolved,
  BugToUser,
  unResolveBugsSelector,
  bugByUserSelector,
} from "./store/Bugs";
import { AddProject, DeleteProject } from "./store/Projects";
import { AddUser } from "./store/Users";
function App() {
  const Store = ConfigStore();
  Store.subscribe(() => {
    console.log("state changed:", Store.getState());
  });

  Store.dispatch(AddUser({ name: "USER 1" }));

  Store.dispatch({
    type: "ERROR",
    payload: { message: "Error occured..." },
  });
  // Store.dispatch(AddUser({ name: "USER 2" }));
  // Store.dispatch(AddUser({ name: "USER 3" }));

  // Store.dispatch(AddProject({ name: "Project 1" }));
  // Store.dispatch(AddProject({ name: "Project 2" }));
  // Store.dispatch(AddProject({ name: "Project 3" }));

  // Store.dispatch(DeleteProject({ id: 1 }));

  // Store.dispatch(BugAdded({ desc: "BUG 1" }));
  // Store.dispatch(BugAdded({ desc: "BUG 2" }));
  // Store.dispatch(BugAdded({ desc: "BUG 3" }));
  // Store.dispatch(BugAdded({ desc: "BUG 4" }));
  // Store.dispatch(BugAdded({ desc: "BUG 5" }));
  // Store.dispatch(BugResolved({ id: 1 }));

  // Store.dispatch(BugToUser({ bugId: 1, userId: 1 }));
  // Store.dispatch(BugToUser({ bugId: 2, userId: 1 }));
  // Store.dispatch(BugToUser({ bugId: 3, userId: 1 }));

  // const x = unResolveBugsSelector(Store.getState());
  // const y = unResolveBugsSelector(Store.getState());
  // console.log(x === y);

  // const bugByUsers = bugByUserSelector(1)(Store.getState());
  // console.log(bugByUsers);

  return <div className="App"></div>;
}

export default App;
