import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Eric" message="Hi there"/>
      <Hello name="Mike" message="Good there"/>
      <Hello name="Josh" message="Hi there"/>
      <Hello name="Waiter"/>
    </div>
  );
}

export default App;
