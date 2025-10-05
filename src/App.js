import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-task">
          <h1>Todo List</h1>
          <div class="heading">
            <input type="text" name="add" id="add-task"/>
            <button type="button" class="add" id="btn-add">tâche</button>
          </div>
          <div class="list-task">
            <p>Tâche 1</p>
            <button type="button" class="delete">Supprimer</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
