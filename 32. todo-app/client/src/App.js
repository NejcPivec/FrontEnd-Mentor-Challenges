import "./App.scss";

import Header from "./components/Header";
import Input from "./components/Input";
import ListTodos from "./components/ListTodos";

import CrudState from "./context/CrudState";

function App() {
  return (
    <CrudState>
      <div className="container">
        <Header />
        <Input />
        <ListTodos />
      </div>
    </CrudState>
  );
}

export default App;
