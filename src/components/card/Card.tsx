import React from "react";
import { ICard } from "../../types";
import classes from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: ICard;
}

function Card(props: IProps) {
  const { data } = props;
  const { id, name, images } = data;

  const navigate = useNavigate();

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
        <p>{data.types[0]}</p>
      </div>
      <img src={images.small} alt={name} loading="lazy" />
      <button className={classes.detailButton} onClick={navigateToDetailPage}>
        View Detail
      </button>
    </div>
  );
}

export default Card;
