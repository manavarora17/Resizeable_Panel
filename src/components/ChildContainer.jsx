import React, { useState } from "react";

const ChildContainer = ({ name, id, number, onUpdateName, onUpdateId, onAdd }) => {
  const [newName, setNewName] = useState("");
  const [newId, setNewId] = useState("");
  const [addCount, setAddCount] = useState(0); // State for counting add clicks
  const [updateCount, setUpdateCount] = useState(0); // State for counting update clicks
  const [updateName, setUpdateName] = useState(""); // State for update name
  const [updateId, setUpdateId] = useState(""); // State for update id

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleIdChange = (event) => {
    setNewId(event.target.value);
  };

  const handleNameUpdate = () => {
    onUpdateName(updateName);
    setNewName("");
    setUpdateCount(prevCount => prevCount + 1); // Increment update count
  };

  const handleIdUpdate = () => {
    onUpdateId(updateId);
    setNewId("");
    setUpdateCount(prevCount => prevCount + 1); // Increment update count
  };

  const handleAdd = () => {
    onAdd(newName, newId);
    setNewName("");
    setNewId("");
    setAddCount(prevCount => prevCount + 1); // Increment add count
  };

  return (
    <div className={`child ${name}`}>
      <h1>Box {number}</h1>
      {number === 1 && (
        <div>
          <h2>Add</h2>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="New ID"
            value={newId}
            onChange={handleIdChange}
          />
          <button onClick={handleAdd}>Add</button>
          <p>Add Clicks: {addCount}</p> {/* Display add count */}
        </div>
      )}
      {number === 1 && (
        <div>
          <h2>Update</h2>
          <input
            type="text"
            placeholder="Update Name"
            value={updateName}
            onChange={(event) => setUpdateName(event.target.value)}
          />
          <button onClick={handleNameUpdate}>Update Name</button>
          <input
            type="text"
            placeholder="Update ID"
            value={updateId}
            onChange={(event) => setUpdateId(event.target.value)}
          />
          <button onClick={handleIdUpdate}>Update ID</button>
          <p>Update Clicks: {updateCount}</p> {/* Display update count */}
        </div>
      )}
      
      <p>
        React is the library for web and native user interfaces. Build user
        interfaces out of individual pieces called components written in
        JavaScript.
      </p>
    </div>
  );
};

export default ChildContainer;
