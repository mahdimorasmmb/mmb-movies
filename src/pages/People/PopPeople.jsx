import { Grid } from "@material-ui/core";
import React from "react";
import CardPeople from "../../component/CardPeople";
import imgSrc from "../../helpers/imgSrc";
import useMovieDB from "../../hooks/useMovieDB";

export default function PopPeople() {
  const { loading, data } = useMovieDB("person/popular");
  return (
    <div>
      <h2>Popular People</h2>
      <Grid container spacing={1}>
        {data?.results?.map((item) => (
          <Grid item xs={2}>
            <CardPeople item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
