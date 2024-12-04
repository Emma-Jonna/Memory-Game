"use client";

import {createContext, useState} from "react";

type cardInfo = {
  id: number;
  name: string;
  frontImage: string;
  backImage: String;
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
    {id: 1, name: "cat", frontImage: "", backImage: ""},
    {id: 2, name: "witch hat", frontImage: "", backImage: ""},
    {id: 3, name: "pumpkin", frontImage: "", backImage: ""},
    {id: 4, name: "potion", frontImage: "", backImage: ""},
    {id: 5, name: "broom", frontImage: "", backImage: ""},
    {id: 6, name: "wand", frontImage: "", backImage: ""},
    {id: 7, name: "crystal ball", frontImage: "", backImage: ""},
    {id: 8, name: "leaf", frontImage: "", backImage: ""},
    {id: 9, name: "candle", frontImage: "", backImage: ""},
    {id: 10, name: "skeleton", frontImage: "", backImage: ""},
    {id: 11, name: "tombstone", frontImage: "", backImage: ""},
    {id: 12, name: "cauldron", frontImage: "", backImage: ""},
    {id: 13, name: "ghost", frontImage: "", backImage: ""},
    {id: 14, name: "mushroom", frontImage: "", backImage: ""},
    {id: 15, name: "moon", frontImage: "", backImage: ""},
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
