"use client";

import {createContext, useEffect, useState} from "react";

type GameDifficulty = {
  name: string;
  numberOfCards: number;
};

type GameDifficultyContext = {
  chosendifficulty: GameDifficulty | null;
  changeDifficultyTo: React.MouseEventHandler<HTMLButtonElement>;
  gameDifficulties: GameDifficulty[];
};

const GameDifficultyContext = createContext<GameDifficultyContext | null>(null);

const GameDifficultyContextProvider = ({children}: {children: React.ReactNode}) => {
  const [chosendifficulty, setChosendifficulty] = useState<GameDifficulty | null>(null);

  const gameDifficulties: GameDifficulty[] = [
    {
      name: "easy",
      numberOfCards: 6,
    },
    {
      name: "medium",
      numberOfCards: 10,
    },
    {name: "hard", numberOfCards: 15},
  ];

  const changeDifficultyTo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    gameDifficulties.forEach((element) => {
      if (element.name == event.currentTarget.id) {
        setChosendifficulty(element);
      }
    });
  };

  return (
    <GameDifficultyContext.Provider
      value={{chosendifficulty, changeDifficultyTo, gameDifficulties}}
    >
      {children}
    </GameDifficultyContext.Provider>
  );
};

export {GameDifficultyContext, GameDifficultyContextProvider};
