"use client";

// import styles from "./page.module.css";

import {GameDifficultyContext} from "../contexts/DifficultyContext";
import {DeckOfCardsContext} from "../contexts/DeckOfCardsContext";
import {useContext, useEffect, useState} from "react";
import {redirect} from "next/navigation";

export default function GameBoard() {
  const {chosendifficulty, changeDifficultyTo, gameDifficulties} = useContext(
    GameDifficultyContext
  ) as GameDifficultyContext;
  const {getRandomCardsForGame, deckOfCards} = useContext(DeckOfCardsContext) as DeckOfCardsContext;

  if (chosendifficulty == null) {
    redirect("/");
  }

  // console.log(arrayOfCards);

  return !deckOfCards ? null : (
    <main>
      <div>Game Board</div>
      {deckOfCards.map((data, index) => {
        return <div key={index}>{data.name}</div>;
      })}
    </main>
  );
}
