import {Router} from "./Router";
import "./App.css";
import { RecoilRoot } from "recoil";


function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
