import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Eric",
    message: "Hi there",
    emoji: "🙋‍♀️",
    seatNumbers: [1, 4, 7],
  };
  return (
    <div className="App">
      <Hello
        person={person}
      />
    </div>
  );
}

export default App;
