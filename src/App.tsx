import ListsGroup from "./components/ListsGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListsGroup  items = {items} heading = "Cities" onSelectItem = {handleSelectItem} />
    </div>
  );
}

export default App;
