import React from "react";
import { ICard } from "../../types";
import classes from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../card-detail/helper/useLocalStorage";

interface IProps {
  data: ICard;
}

function Card(props: IProps) {
  const { data } = props;
  const { id, name, images } = data;

  const navigate = useNavigate();
  const { isSaved } = useLocalStorage(id);

  const navigateToDetailPage = () => {
    navigate({
      pathname: "card-detail",
      search: `id=${id}`,
    });
  };

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <p>{name}</p>
        {isSaved(id) && (
          <img
            src={require("./check.png")}
            width={16}
            height={16}
            alt="check"
          />
        )}
      </div>
      <img src={images.small} alt={name} />
      <button className={classes.detailButton} onClick={navigateToDetailPage}>
        View Detail
      </button>
    </div>
  );
}

export default Card;
