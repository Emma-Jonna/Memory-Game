"use client";

// import styles from "./page.module.css";

import "../styles/memoryCard.css";
import {GameDifficultyContext} from "../contexts/DifficultyContext";
import {DeckOfCardsContext} from "../contexts/DeckOfCardsContext";
import {useContext, useEffect, useState} from "react";
import {redirect} from "next/navigation";
import style from "../styles/memoryCard.module.css";

export default function GameBoard() {
  const {chosendifficulty, changeDifficultyTo, gameDifficulties} = useContext(
    GameDifficultyContext
  ) as GameDifficultyContext;
  const {getRandomCardsForGame, deckOfCards} = useContext(DeckOfCardsContext) as DeckOfCardsContext;

  if (chosendifficulty == null) {
    redirect("/");
  }

  const flip = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("hello");

    const classList = event.currentTarget.classList;

    if (classList.contains("flipped")) {
      event.currentTarget.classList.remove("flipped");
    } else {
      event.currentTarget.classList.add("flipped");
    }
  };

  /*   if (deckOfCards != null) {
    deckOfCards[0].name = "hello";
  } */

  // console.log(arrayOfCards);

  return !deckOfCards ? null : (
    <main>
      <div>Game Board</div>
      <div className={"board-grid " + chosendifficulty.name}>
        {deckOfCards.map((data, index) => {
          return (
            <div className={"container"} id={data.id.toString()} key={index}>
              <div className={"card"} onClick={flip}>
                <div className={"front"}>
                  {/* {      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">} */}
                </div>
                <div className={"back"}>
                  {/* <img src="" alt="" /> */}
                  <p>{data.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
