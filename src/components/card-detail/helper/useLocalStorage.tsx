import { useEffect, useState } from "react";

function useLocalStorage(id: string) {
  const [savedCards, setSavedCards] = useState<string[]>([]);
  const [isSaveBtn, setIsSaveBtn] = useState<boolean>(false);

  useEffect(() => {
    const cards = localStorage.getItem("myCards");
    if (cards) setSavedCards(JSON.parse(cards));
  }, []);

  useEffect(() => {
    if (savedCards.includes(id)) {
      return setIsSaveBtn(false);
    }

    setIsSaveBtn(true);
  }, [savedCards, id]);

  const saveOrRemoveCard = () => {
    if (isSaveBtn) {
      const newSavedCards = JSON.stringify([...savedCards, id]);
      setSavedCards([...savedCards, id]);
      return localStorage.setItem("myCards", newSavedCards);
    }

    const filteredCards = savedCards.filter((cardId) => cardId !== id);

    localStorage.setItem("myCards", JSON.stringify(filteredCards));
    setSavedCards(filteredCards);
  };

  const isSaved = (cardId: string) => {
    return savedCards.includes(cardId);
  };

  return { savedCards, isSaveBtn, saveOrRemoveCard, isSaved };
}

export default useLocalStorage;
