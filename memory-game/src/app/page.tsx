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
      console.log("startbutton is active");
      setStartbutton(false);
    } else {
      console.log("startbutton is not active");
    }
  }, [chosendifficulty]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event.currentTarget);

    if (chosendifficulty == null) {
      console.log("no difficulty chosen");
      return;
    } else {
      console.log("the chosen difficulty is", chosendifficulty.name);
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
