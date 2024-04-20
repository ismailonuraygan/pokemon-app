import React, { useEffect, useState } from "react";
import { useRequest } from "../../api/useRequest";
import { ICard } from "../../types";
import Card from "../card/Card";
import classes from "./Home.module.scss";

function Home() {
  const req = useRequest();
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAndSetData = async () => {
    try {
      setLoading(true);
      const result = await req.get("cards", {
        params: {
          pageSize: 10,
        },
      });
      if (result) {
        console.log("result", result);
        setCards(result.data.data);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      {cards.length ? (
        cards.map((card) => <Card data={card} />)
      ) : (
        <p>No Cards available</p>
      )}
    </div>
  );
}

export default Home;
