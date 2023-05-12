import { useState } from "react";
import "./SquareGame.css";

function SquareGame() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleClick = (dx, dy) => {
    const newPos = { x: position.x + dx, y: position.y + dy };

    if (isInside(newPos)) {
      setPosition(newPos);
    }
  };

  const isInside = ({ x, y }) => {
    const size = 500;
    const margin = 0;
    return (
      x >= margin &&
      x <= size - (50 + margin) &&
      y >= margin &&
      y <= size - (50 + margin)
    );
  };

  return (
    <>
      <div className="main-container">
        <div>
          <button
            disabled={position.y === 0 ? true : false}
            className="vertical"
            onClick={() => handleClick(0, -50)}
          >
            Up
          </button>
        </div>
        <div className="container">
          <div>
            <button
              disabled={position.x === 0 ? true : false}
              className="horizontal"
              onClick={() => handleClick(-50, 0)}
            >
              Left
            </button>
          </div>
          <div className="big-square">
            <div
              className="small-square"
              style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
              }}
            />
          </div>
          <div>
            <button
              disabled={position.x === 450 ? true : false}
              className="horizontal"
              onClick={() => handleClick(50, 0)}
            >
              Right
            </button>
          </div>
        </div>
        <div>
          <button
            disabled={position.y === 450 ? true : false}
            className="vertical"
            onClick={() => handleClick(0, 50)}
          >
            Down
          </button>
        </div>
      </div>
    </>
  );
}

export default SquareGame;
