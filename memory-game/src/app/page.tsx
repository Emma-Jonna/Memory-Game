"use client";

import styles from "./page.module.css";
import DifficultyButton from "@/components/buttons/DifficultyButton";
import StartButton from "@/components/buttons/StartButton";
import {useState, useContext, useEffect} from "react";
import {GameDifficultyContext} from "./contexts/DifficultyContext";

export default function Home() {
  const {chosendifficulty, changeDifficultyTo, gameDifficulties} = useContext(
    GameDifficultyContext
  ) as GameDifficultyContext;
  const [startbutton, setStartbutton] = useState(true);

  useEffect(() => {
    if (chosendifficulty != null) {
      setStartbutton(false);
    }
  }, [chosendifficulty]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (chosendifficulty != null) {
      console.log("the chosen difficulty is", chosendifficulty.name);
    }

    return;
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
