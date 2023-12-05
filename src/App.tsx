import ListsGroup from "./components/ListsGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListsGroup  items = {items} heading = "Cities" />
    </div>
  );
}

export default App;
