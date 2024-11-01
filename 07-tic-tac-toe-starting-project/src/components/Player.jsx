// Player.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const inputRef = useRef(null);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  // Focus input field when editing mode is enabled
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <li>
      <span className={`player ${isActive ? "active" : ""}`}>
        {isEditing ? (
          <input
            type="text"
            ref={inputRef}
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {isEditing ? "Speichern" : "Bearbeiten"}
      </button>
    </li>
  );
}
