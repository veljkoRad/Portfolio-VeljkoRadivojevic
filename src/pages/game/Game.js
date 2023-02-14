import { useEffect, useState } from "react";
import { CardMedia } from "@mui/material";
import { gameStyles } from "../../assets/gameStyles";
import ScoreBoard from "./ScoreBoard";
import cloud from "../../assets/photos&images/cloud.svg";
import mountain from "../../assets/photos&images/mountains.svg";
import sun from "../../assets/photos&images/sun.svg";
import tree from "../../assets/photos&images/tree.svg";
import moon from "../../assets/photos&images/moon.svg";
import blank from "../../assets/photos&images/blank.png";
import diamond from "../../assets/photos&images/diamond.svg";

import {
  checkForRowOfThree,
  checkForRowOfFour,
  checkForColumnOfThree,
  checkForColumnOfFour,
  moveIntoSquareBelow,
  createBoard,
} from "../../functions/functionsGame";

const Game = ({ wiDth }) => {
  const candyColors = [cloud, moon, sun, mountain, tree, diamond];

  const [currentColorArrangament, setCurrentColorArrangament] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);

  useEffect(() => {
    createBoard(setCurrentColorArrangament, candyColors);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour(currentColorArrangament, setScoreDisplay, blank);
      checkForRowOfFour(currentColorArrangament, setScoreDisplay, blank);
      checkForColumnOfThree(currentColorArrangament, setScoreDisplay, blank);
      checkForRowOfThree(currentColorArrangament, setScoreDisplay, blank);
      moveIntoSquareBelow(currentColorArrangament, candyColors, blank);
      setCurrentColorArrangament([...currentColorArrangament]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForColumnOfThree,
    checkForRowOfFour,
    checkForRowOfThree,
    moveIntoSquareBelow,
    currentColorArrangament,
  ]);

  const dragStart = (e) => {
    // console.log(e.target.getAttribute("data-id"));
    setSquareBeingDragged(e.target);
  };

  const dragDrop = (e) => {
    // console.log(e.target.getAttribute("data-id"));
    setSquareBeingReplaced(e.target);
  };

  const dragEnd = (e) => {
    const squareBeingDraggedId = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );
    // moramo parseInt,jer nam e.target data-id vraca kao string a ne kao broj
    currentColorArrangament[squareBeingReplacedId] =
      squareBeingDragged.getAttribute("src");
    currentColorArrangament[squareBeingDraggedId] =
      squareBeingReplaced.getAttribute("src");

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId + 1,
      squareBeingDraggedId - 8,
      squareBeingDraggedId + 8,
    ];
    const validMove = validMoves.includes(squareBeingReplacedId);

    const isColumnOfFour = checkForColumnOfFour(
      currentColorArrangament,
      setScoreDisplay,
      blank
    );
    const isRowOfFour = checkForRowOfFour(
      currentColorArrangament,
      setScoreDisplay,
      blank
    );
    const isColumnOfThree = checkForColumnOfThree(
      currentColorArrangament,
      setScoreDisplay,
      blank
    );
    const isRowOfThree = checkForRowOfThree(
      currentColorArrangament,
      setScoreDisplay,
      blank
    );
    // console.log(isRowOfThree);
    //Ove 4 konstante su boolean,jer smo stavili return true.
    if (
      squareBeingReplacedId &&
      validMove &&
      (isColumnOfFour || isRowOfFour || isColumnOfThree || isRowOfThree)
    ) {
    } else {
      currentColorArrangament[squareBeingReplacedId] =
        squareBeingReplaced.getAttribute("src");
      currentColorArrangament[squareBeingDraggedId] =
        squareBeingDragged.getAttribute("src");
      setCurrentColorArrangament([...currentColorArrangament]);
    }
  };

  return (
    <div
      style={{
        ...gameStyles.mainDiv,
        flexDirection: wiDth > 882 ? "row" : "column",
      }}
    >
      <div
        style={{
          width:
            wiDth > 615
              ? "530px"
              : wiDth > 520
              ? "464px"
              : wiDth > 390
              ? "360px"
              : "256px",
          height:
            wiDth > 615
              ? "530px"
              : wiDth > 520
              ? "464px"
              : wiDth > 390
              ? "360px"
              : "256px",
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto 2rem auto",
        }}
      >
        {currentColorArrangament.map((candyColor, index) => (
          <img
            key={index}
            src={candyColor}
            data-id={index}
            style={{
              border: "1px solid #F6BE3B",
              padding: "4px",
              cursor: "auto",
              width:
                wiDth > 615
                  ? "64px"
                  : wiDth > 520
                  ? "58px"
                  : wiDth > 390
                  ? "45px"
                  : "32px",
              height:
                wiDth > 615
                  ? "64px"
                  : wiDth > 520
                  ? "58px"
                  : wiDth > 390
                  ? "45px"
                  : "32px",
            }}
            draggable={true}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDragStart={dragStart}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
            // onTouchStart={dragStart}
            // onTouchMoveCapture={dragDrop}
            // onTouchCancel={dragEnd}
            alt={candyColor}
          />
        ))}
      </div>
      <ScoreBoard scoreDisplay={scoreDisplay} gameStyles={gameStyles} />
    </div>
  );
};

export default Game;
