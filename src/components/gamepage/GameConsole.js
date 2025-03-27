import React, { useState } from 'react';
import './GameConsole.css'; // Import the game layout specific CSS

const GameLayout = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerCountry, setPlayerCountry] = useState('Korea');
  const [classAssigned, setClassAssigned] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const [playerStats, setPlayerStats] = useState({
    hp: 100,
    stamina: 100,
    strength: 1,
    vitality: 1,
    perception: 1,
    agility: 1,
    intelligence: 1,
    luck: 1,
  });

  const [currentTab, setCurrentTab] = useState('stats'); // To track which section is active (stats/skills/inventory)
  
  const [playerLevel, setPlayerLevel] = useState(1); // Adding level state
  const [exp, setExp] = useState(0); // Adding exp state
  const maxExp = 100; // Max experience needed to level up

  const randomClasses = ['Assassin', 'Tank', 'Mage', 'Fighter', 'Ranger'];

  const handleStartGame = () => {
    const randomClass = randomClasses[Math.floor(Math.random() * randomClasses.length)];
    setClassAssigned(randomClass);
    setGameStarted(true);
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setPlayerCountry(event.target.value);
  };

  const handleTabChange = (direction) => {
    if (direction === 'left') {
      setCurrentTab(currentTab === 'stats' ? 'inventory' : currentTab === 'skills' ? 'stats' : 'skills');
    } else {
      setCurrentTab(currentTab === 'stats' ? 'skills' : currentTab === 'skills' ? 'inventory' : 'stats');
    }
  };

  // Function to increase experience
  const increaseExp = () => {
    if (exp >= maxExp) {
      setExp(0);
      setPlayerLevel(playerLevel + 1); // Level up
    } else {
      setExp(exp + 10); // Increase exp by 10 for testing
    }
  };

  return (
    <div className="game-container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="left-panel-top">
          <div className="hunter-info-box">
            <h3>{playerName || 'Name'}</h3>
            <hr />
            <p>Hunter Rank: E</p>
            <p>Hunter Class: {classAssigned || ''}</p>
            <p>Guild: None </p>
            <hr />
            <p>Origin Country: {playerCountry}</p>
            <hr />
            <p>Gold: 0</p>
            <p>Essence Stones: 0</p>
			<hr />
          </div>
        </div>

        {/* New Black Panel for Level and EXP */}
        <div className="level-exp-panel">
          <div className="level-container">
            <p>LEVEL: {playerLevel}</p>
          </div>
          <div className="exp-container">
            <p>EXP:</p>
            <div className="bar-container">
              <div
                className="stat-bar"
                style={{
                  width: `${(exp / maxExp) * 100}%`,
                  backgroundColor: '#3b8e3b',
                }}
              >
                {exp}/{maxExp}
              </div>
            </div>
          </div>
          <button className="increase-exp-btn" onClick={increaseExp}>Increase EXP</button>
        </div>
      </div>

      {/* Central Panel (Console & Buttons) */}
      <div className="central-piece">
        <div className="console-container">
          {gameStarted ? (
            <>
              <p>Your class is: {classAssigned}</p>
              <p>Enter your name below:</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={playerName}
                onChange={handleNameChange}
                className="name-input"
              />
              <p>Choose your country of origin:</p>
              <select value={playerCountry} onChange={handleCountryChange} className="country-select">
                <option value="South Korea">South Korea</option>
				<option value="England">England</option>
				<option value="France">France</option>
				<option value="USA">USA</option>
				<option value="Japan">Japan</option>
                {/* Add more countries as needed */}
              </select>
            </>
          ) : (
            <p></p> // Empty space for no message when not started
          )}
        </div>

        {/* Button Section */}
        <div className="button-bar">
          {!gameStarted ? (
            <button onClick={handleStartGame}>Awaken</button>
          ) : (
            <button disabled>Game Started</button>
          )}
        </div>
      </div>

     
 {/* Right Panel */}
      <div className="right-panel">
        {/* Content Panel (Stats, Skills, Inventory) */}
        <div className="content-panel">
          <div className="button-panel">
            <div className="arrow" onClick={() => handleTabChange('left')}>&#8592;</div>
            <div className="menu-text">
              <p><strong>{currentTab.toUpperCase()}</strong></p>
            </div>
            <div className="arrow" onClick={() => handleTabChange('right')}>&#8594;</div>
          </div>
		  
          {currentTab === 'stats' && (
            <div className="stats-panel">
              <h3></h3>
              <hr />
              <div className="stats-grid">
                <div>
                  <p>HP:</p>
                  <div className="bar-container">
                    <div
                      className="stat-bar"
                      style={{
                        width: `${(playerStats.hp / 100) * 100}%`,
                        backgroundColor: '#f44336',
                      }}
                    >
                      {playerStats.hp}/100
                    </div>
                  </div>
                </div>
                <div>
                  <p>Stamina:</p>
                  <div className="bar-container">
                    <div
                      className="stat-bar"
                      style={{
                        width: `${(playerStats.stamina / 100) * 100}%`,
                        backgroundColor: '#4CAF50',
                      }}
                    >
                      {playerStats.stamina}/100
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="stats-grid">
                <p>STR: {playerStats.strength}</p>
                <p>VIT: {playerStats.vitality}</p>
                <p>PER: {playerStats.perception}</p>
                <p>AGL: {playerStats.agility}</p>
                <p>INT: {playerStats.intelligence}</p>
                <p>LCK: {playerStats.luck}</p>
              </div>
            </div>
			
          )}
          {currentTab === 'skills' && <div className="skills-panel">Skills Content</div>}
          {currentTab === 'inventory' && <div className="inventory-panel">Inventory Content</div>}
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
