import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRequest } from "../../api/useRequest";
import { ICard } from "../../types";
import classes from "./CardDetail.module.scss";
import useCardButtonVariants from "./helper/useCardButtonVariants";
import useLocalStorage from "./helper/useLocalStorage";

function CardDetail() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const req = useRequest();

  const [data, setData] = useState<ICard>();
  const { isSaveBtn, saveOrRemoveCard } = useLocalStorage(id || "");
  const { buttonTxt, buttonClasses } = useCardButtonVariants({ isSaveBtn });

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
      <button className={buttonClasses} onClick={saveOrRemoveCard}>
        {buttonTxt}
      </button>
    </div>
  );
}

export default CardDetail;
