import { useState } from 'react';


export default function Player ({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }

    return (
        <li>
            <span className="player">
              {isEditing ? <input type="text" required placeholder={name} /> : <span className="player-name">{name}</span> }
              <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing? <button onClick={handleEditClick}>Save</button> : <button onClick={handleEditClick}>Edit</button>}
          </li>
    );
}