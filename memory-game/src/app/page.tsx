"use client";

import styles from "./page.module.css";
import DifficultyButton from "@/components/buttons/DifficultyButton";
import StartButton from "@/components/buttons/StartButton";
import {useState, useContext} from "react";
import {GameDifficultyContext} from "./contexts/DifficultyContext";

export default function Home() {
  const {chosendifficulty, changeDifficultyTo, gameDifficulties} = useContext(
    GameDifficultyContext
  ) as GameDifficultyContext;
  /*   type GameDifficulties = {
    name: string;
    numberOfCards: number;
  }; */

  // const [chosendifficulty, setChosendifficulty] = useState<GameDifficulties>();

  /*  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget.id);
    gameDifficulties.forEach((element) => {
      if (element.name == event.currentTarget.id) {
        setChosendifficulty(element);
        console.log(element);
      }
    });

    // console.log(chosendifficulty?.name);

    // setChosendifficulty(event.currentTarget.)
  };
 */
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event.currentTarget);
    if (chosendifficulty == null) {
      console.log("no difficulty chosen");
      return;
    } else {
      console.log("the chosen difficulty is", chosendifficulty.name);
    }
  };

  // console.log(chosendifficulty);

  /*  const gameDifficulties: GameDifficulties[] = [
    {
      name: "easy",
      numberOfCards: 12,
    },
    {
      name: "medium",
      numberOfCards: 20,
    },
    {name: "hard", numberOfCards: 30},
  ]; */

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

      <StartButton onClick={handleSubmit} />
    </main>
  );
}
