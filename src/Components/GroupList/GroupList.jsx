import React from 'react';
import Group from '../Group/Group';
import NoData from '../NoData/NoData'; 

const GroupList = ({ groups, updateGroup, deleteGroup, addPost }) => {
  return (
    <div>
      <h2 className='text-center my-4' style={{color:"#ccc"}}>Groups List</h2>
      {groups.length === 0 ? ( // Check if groups array is empty
        <NoData /> // If empty, display the NoData component
      ) : (
        <table className="table mt-3">
          <thead className="table-head  table-primary">
            <tr>
              <th scope="col">#Id</th>
              <th scope="col">Group Name</th>
              <th scope="col">Description</th>
              <th scope="col">Created At</th>
              <th scope="col">Actions</th>
              <th scope="col">Posts</th>
            </tr>
          </thead>
          <tbody className='w-100'>
            {groups.map((group, index) => (
              <tr key={group.id} className="table-light">
                <Group
                  group={group}
                  updateGroup={updateGroup}
                  deleteGroup={deleteGroup}
                  index={index + 1}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GroupList;
