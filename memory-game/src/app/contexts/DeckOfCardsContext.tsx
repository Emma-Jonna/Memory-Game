"use client";

import {createContext, useState} from "react";

type cardInfo = {
  name: string;
  imageUrl: string;
};

type cardDeck = cardInfo[];

type DeckOfCardsContext = {
  getRandomCardsForGame: Function;
  deckOfCards: cardDeck | null;
};

const DeckOfCardsContext = createContext<DeckOfCardsContext | null>(null);

const DeckOfCardsContextContextProvider = ({children}: {children: React.ReactNode}) => {
  const [deckOfCards, setDeckOfCards] = useState<cardDeck | []>([]);

  const listOfAllCards: cardDeck = [
    {name: "cat", imageUrl: ""},
    {name: "witch hat", imageUrl: ""},
    {name: "pumpkin", imageUrl: ""},
    {name: "potion", imageUrl: ""},
    {name: "broom", imageUrl: ""},
    {name: "wand", imageUrl: ""},
    {name: "crystal ball", imageUrl: ""},
    {name: "leaf", imageUrl: ""},
    {name: "candle", imageUrl: ""},
    {name: "skeleton", imageUrl: ""},
    {name: "tombstone", imageUrl: ""},
    {name: "cauldron", imageUrl: ""},
    {name: "ghost", imageUrl: ""},
    {name: "mushroom", imageUrl: ""},
    {name: "moon", imageUrl: ""},
  ];

  const shuffle = (cards: number[]) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
  };

  const getRandomCardsForGame = (numberOfCards: number) => {
    let randomCardIndexNumbers: number[] = [];

    while (randomCardIndexNumbers.length < numberOfCards) {
      let randomNumber = Math.floor(Math.random() * numberOfCards);

      if (!randomCardIndexNumbers.includes(randomNumber)) {
        randomCardIndexNumbers.push(randomNumber);
      }
    }

    let deckOfCardPairs = [...randomCardIndexNumbers, ...randomCardIndexNumbers];

    deckOfCardPairs = shuffle(deckOfCardPairs);
    deckOfCardPairs = shuffle(deckOfCardPairs);
    deckOfCardPairs = shuffle(deckOfCardPairs);

    let tempArray: cardDeck = [];

    deckOfCardPairs.map((index) => {
      tempArray.push(listOfAllCards[index]);
    });

    setDeckOfCards(tempArray);
  };

  return (
    <DeckOfCardsContext.Provider value={{getRandomCardsForGame, deckOfCards}}>
      {children}
    </DeckOfCardsContext.Provider>
  );
};

export {DeckOfCardsContext, DeckOfCardsContextContextProvider};
