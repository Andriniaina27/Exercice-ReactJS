import './App.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [form, setForm] = useState({
    add: ""
  });

  const [people, setPeople] = useState([]);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () =>{
    const {add} = form

    if (!add){
      setError("Veuillez remplir le champ vide");
      return;
    }

    setPeople([...people, {add}]);
    setForm({add: ""});
    setError("");
  }

  const handleDelete = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-task">
          <h1>Todo List</h1>
          <div class="heading">
            <input type="text" name="add" placeholder='ajouter une tâche' onChange={handleChange} value={form.add} id="add-task"/>
            <button type="button" class="add" id="btn-add" onClick={handleAdd}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
            {people.map((person, index) =>(
              <div class="list-task" key={index}>
                <p>{person.add}</p>
                <button type="button" class="delete" onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
