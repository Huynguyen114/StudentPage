import React from 'react';

const RowTable = PropTypes => {
  function confirmDelete() {
    const action = window.confirm('Do you want delete line ??');
    if (action) {
      PropTypes.onDelete(PropTypes.item.id);
    }
  }
  return (
    <tr>
      <td>{PropTypes.item.firstName}</td>
      <td>{PropTypes.item.lastName}</td>
      <td>{PropTypes.item.email}</td>
      <td>{PropTypes.item.location}</td>
      <td>{PropTypes.item.hobby}</td>
      <td className='action'>
        <button
          type='submit'
          onClick={() => PropTypes.edit(PropTypes.students, PropTypes.index)}
        >
          Edit
        </button>
        <button type='submit' onClick={() => confirmDelete()}>
          Del
        </button>
      </td>
    </tr>
  );
};

export default RowTable;
