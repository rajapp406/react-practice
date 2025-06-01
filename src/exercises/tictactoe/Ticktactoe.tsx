import { useState } from "react";
import "../../App.css";
import { Record } from "./Record";
const user = [
  {
    name: "Raja",
    symbol: "X",
  },
  {
    name: "Nihira",
    symbol: "O",
  },
];
const solutionArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export function Tictactoe() {
  const [init, setInit] = useState<any[]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isActive, setIsActive] = useState("X");
  const [isWinner, setIsWinner] = useState(false);
  const turnFn = () => {
    return user.find((v) => v.symbol === isActive)?.name;
  };
  const [turn, setTurn] = useState(turnFn);
  const onClick = (index: number, j: number) => {
    setIsActive(isActive === "X" ? "O" : "X");
    setInit((prev) => {
      const newArr = [...prev];
      newArr[index][j] = isActive;
      setIsWinner(isWin(newArr));
      setTurn(turnFn);
      return newArr;
    });
  };
  const isWin = (arr: any) => {
    const flatSelections = arr.flatMap((v: string) => v);
    const isWin = solutionArray.some((ele: number[]) => {
      return ele.every((n: number) => flatSelections[n] === isActive);
    });
    return isWin;
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "30px",
          backgroundColor: "blue",
          display: isWinner ? "block" : "none",
        }}
      >
        {turn} is the Winner
      </div>
      <table
        style={{
          pointerEvents: (isWinner
            ? "none"
            : "cursor") as React.CSSProperties["pointerEvents"],
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center'
        }}
      >
        <thead></thead>
        <tbody>
          {init.map((row, index) => {
            return (
              <Record
                key={index}
                row={row}
                onClick={(j: any) => onClick(index, j)}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}


