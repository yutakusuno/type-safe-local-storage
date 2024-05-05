import { itemsStorage } from './lib/items-storage';
import './App.css';

function App() {
  const handleAddItem = () => {
    const item = { id: Math.random(), name: 'Item' };
    itemsStorage.setItem(item);
  };

  const handleGetItems = () => {
    const items = itemsStorage.getItems();
    console.log('Items:', items);
  };

  const handleClearItems = () => {
    itemsStorage.clearItems();
  };

  return (
    <>
      <h1>localStorage Demo</h1>
      <div className='card'>
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleGetItems}>Get Items</button>
        <button onClick={handleClearItems}>Clear Items</button>
      </div>
    </>
  );
}

export default App;
