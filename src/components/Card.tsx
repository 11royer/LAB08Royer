import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>RANDOM IMAGE</h1>
        <img
          src="https://api.minimalavatars.com/avatar/random/png"
          alt="Avatar"
          className="avatar"
        />
        <div className="description">
          <h3>DESCRIPTION:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor praesentium quia enim tempora impedit ipsa accusantium suscipit adipisci eos porro dolorum,
            hic cumque provident totam exercitationem commodi? Reiciendis, minima repellat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
