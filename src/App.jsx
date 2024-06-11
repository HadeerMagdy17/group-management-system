
import { useEffect, useState } from 'react';
import './App.css';
import GroupForm from './Components/GroupForm/GroupForm';
import GroupList from './Components/GroupList/GroupList';

function App() {
  const [groups, setGroups] = useState([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups'));
    if (savedGroups) {
      setGroups(savedGroups);
    }
  }, []);

  // Update localStorage whenever groups change
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const updateGroup = (id, updatedGroup) => {
    setGroups(groups.map(group => group.id === id ? { ...group, ...updatedGroup } : group));
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter(group => group.id !== id));
  };

  return (
    <div className="App">
      <GroupForm addGroup={addGroup} />
      <GroupList groups={groups} updateGroup={updateGroup} deleteGroup={deleteGroup} />
    </div>
  );
}

export default App;
