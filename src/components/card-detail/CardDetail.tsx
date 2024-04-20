import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRequest } from "../../api/useRequest";
import { ICard } from "../../types";
import classes from "./CardDetail.module.scss";
import useButtonStatus from "./helper/useButtonStatus";

function CardDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const req = useRequest();

  const [data, setData] = useState<ICard>();
  const [isSaveBtn, setIsSaveBtn] = useState<boolean>(true);
  const [savedCards, setSavedCards] = useState<string[]>();

  const { buttonTxt, buttonClasses } = useButtonStatus({ isSaveBtn });

  const fetchCardDetail = async () => {
    try {
      const id = searchParams.get("id");
      const result = await req.get(`cards/${id}`);
      if (result) setData(result.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCardDetail();
  }, []);

  useEffect(() => {
    (() => {
      const myCards = localStorage.getItem("myCards");
      myCards && setSavedCards(JSON.parse(myCards));

      if (JSON.parse(myCards!).includes(id)) {
        console.log("log from if");
        setIsSaveBtn(false);
        return;
      }

      setIsSaveBtn(true);
    })();
  }, [savedCards]);

  /** This part could have been written much more cleanly if time had been given. 
    By writing a custom hook, it could be checked whether the card in question is in localStorage.
     according to the result, save / remove could be done.
      This would have made the code much cleaner. */

  const handleSaveOrRemove = () => {
    const savedCards = JSON.parse(localStorage.getItem("myCards")!);

    if (isSaveBtn) {
      const data = JSON.stringify([...savedCards, id]);
      localStorage.setItem("myCards", data);
      setSavedCards([...savedCards, id]);
      return;
    }

    const filteredSavedCards = savedCards?.filter((savedId: string) => {
      return savedId !== id;
    });

    localStorage.setItem("myCards", JSON.stringify(filteredSavedCards));
    setSavedCards(filteredSavedCards);
  };

  return (
    <div className={classes.wrapper}>
      <img
        src={data?.images.small}
        alt="card"
        className=""
        loading="lazy"
        width={250}
        height={300}
      />
      <div className={classes.detailRow}>
        <p>Name:</p>
        <p>{data?.name}</p>
      </div>
      <div className={classes.detailRow}>
        <p>HP:</p>
        <p>{data?.hp}</p>
      </div>
      <div className={classes.detailRow}>
        <p>Set:</p>
        <p>{data?.set.name}</p>
      </div>
      <button className={buttonClasses} onClick={handleSaveOrRemove}>
        {buttonTxt}
      </button>
    </div>
  );
}

export default CardDetail;
