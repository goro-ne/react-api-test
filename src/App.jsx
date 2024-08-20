import './App.css';
import axios from "axios";

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  const onClickUsers1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUsers1}>id=1のuser</button>
    </div>
  );
}

export default App;
