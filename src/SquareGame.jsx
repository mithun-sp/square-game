import { useState } from "react";
import "./SquareGame.css";

function SquareGame() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  //Below functions changes the position of small-sqaure by changing position.x and postion.y
  const handleClick = (dx, dy) => {
    const newPos = { x: position.x + dx, y: position.y + dy };

    if (isInside(newPos)) {
      setPosition(newPos);
    }
  };

  const isInside = ({ x, y }) => {
    // movement of small-square can be adjusted by changing these values
    const size = 500;
    const margin = 0;

    //"isInside" works by checking position (x,y) with respect to left and top margin.
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
            // If small square reaches the boundary, then nearest button is disabled
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
