import React, { useEffect, useState } from "react";
import { useRequest } from "../../api/useRequest";
import { ICard } from "../../types";
import Card from "../card/Card";
import classes from "./Home.module.scss";

/*According to requirements it can be implement infinite scroll here 
  to allow user to load more data as they scroll.
  Infinite Scroll technique is the best option to meet this need
*/

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
    /*it can be implement skeleton loading here for cards. */
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.container}>
      {cards.length ? (
        cards.map((card) => <Card data={card} />)
      ) : (
        /* a good looking fallback component could be created  */
        <p>No Cards available</p>
      )}
    </div>
  );
}

export default Home;
