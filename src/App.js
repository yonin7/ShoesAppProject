import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import api from './api/api';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const d = await api.getItems();
      setData(d);
    };

    fetchData();
  }, []);

  const handleCreate = async (item) => {
    await api.postItem(item);
    const apiData = await api.getItems();
    setData({ data: apiData });
  };
  const handleDelete = async (id) => {
    await api.deleteItem(id);
    const apiData = await api.getItems();
    setData({ data: apiData });
    console.log(apiData);
  };

  const handleUpdate = async (item) => {
    await api.putItem(item);
    const apiData = await api.getItems();
    setData({ data: apiData });
  };
  const displayItems = () => {
    return data.map((item, i) => {
      return (
        <div key={i} className="displayItemsContainer">
          <Card item={item} hendleCallback={handleUpdate} />
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div className="App">
      {data.length > 0 && displayItems()}
      <div className="createCardContainer">
        <h2>Create New Item</h2>
        <Card
          hendleCallback={handleCreate}
          item={{ name: '', price: '', id: '', size: '', imgURL: '' }}
        />
      </div>
    </div>
  );
};

// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
