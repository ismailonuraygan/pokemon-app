import React, { useEffect, useState } from "react";
import { useRequest } from "../../api/useRequest";
import { ICard } from "../../types";
import Card from "../card/Card";
import classes from "./Home.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingDots from "./components/loading/Loading";

/*According to requirements it can be implement infinite scroll here 
  to allow user to load more data as they scroll.
  Infinite Scroll technique is the best option to meet this need
*/

function Home() {
  const req = useRequest();
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchAndSetData = async () => {
    try {
      setIsLoading(true);
      const result = await req.get("cards", {
        params: {
          page: page,
          pageSize: 10,
        },
      });
      if (result) {
        console.log("result", result);
        setCards([...cards, ...result.data.data]);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAndSetData();
  }, [page]);

  return (
    <div className={classes.container}>
      <InfiniteScroll
        dataLength={cards.length}
        next={() => {
          console.log("xxpage", page);
          setPage((prev) => prev + 1);
        }}
        hasMore={true}
        loader={""}
        className={classes.infiniteScroll}
      >
        {cards.map((card) => (
          <Card data={card} />
        ))}
      </InfiniteScroll>
      {isLoading && <LoadingDots text="Loading" />}
    </div>
  );
}

export default Home;
