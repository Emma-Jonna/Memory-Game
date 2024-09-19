"use client";

import styles from "./page.module.css";
import DifficultyButton from "@/components/buttons/DifficultyButton";
import StartButton from "@/components/buttons/StartButton";
import {useState, useContext, useEffect} from "react";
import {GameDifficultyContext} from "./contexts/DifficultyContext";
import {DeckOfCardsContext} from "./contexts/DeckOfCardsContext";

import {redirect, useRouter} from "next/navigation";

export default function Home() {
  const {chosendifficulty, changeDifficultyTo, gameDifficulties} = useContext(
    GameDifficultyContext
  ) as GameDifficultyContext;
  const {getRandomCardsForGame, deckOfCards} = useContext(DeckOfCardsContext) as DeckOfCardsContext;
  const [startbutton, setStartbutton] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (chosendifficulty != null) {
      setStartbutton(false);
    }
  }, [chosendifficulty]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (chosendifficulty != null) {
      getRandomCardsForGame(chosendifficulty.numberOfCards);
      // redirect("/game-board");
      router.push("/game-board");
    }
  };

  return (
    <main className={styles.main}>
      <h1>Memory Game</h1>

      <div>
        {gameDifficulties.map((data) => {
          return (
            <DifficultyButton
              key={data.name}
              id={data.name}
              difficulty={data.name}
              onClick={changeDifficultyTo}
              value={data.numberOfCards}
            />
          );
        })}
      </div>

      <StartButton className="start-button" onClick={handleSubmit} disabled={startbutton} />
    </main>
  );
}
