import React from 'react';

function MovieForm({ match, history }) {
  const handleSave = () => {
    history.push('/movies');
    console.log('Saved');
  };

  return (
    <>
      <h1>Movie : {match.params._id}</h1>
      <button onClick={handleSave} className="btn btn-primary">
        Save
      </button>
    </>
  );
}

export default MovieForm;
