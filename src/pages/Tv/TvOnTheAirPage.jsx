import { Grid } from "@material-ui/core";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import React from "react";
import CardMovie from "../../component/CardMovie";
import useMovieDB from "../../hooks/useMovieDB";
import { useState } from "react";
import Loading from "../../component/Loading";

export default function TvOnTheAir() {
  const [page, setPage] = useState(1);
  const { data, loading } = useMovieDB(`tv/on_the_air/`, {
    query: `page=${page}`,
  });
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl  mx-6 mt-5 font-bold text-gray-200">
        On The Air
      </h2>
      <Grid container spacing={1} alignContent="center" justifyContent="center">
        {loading ? (
          <Grid>
            <Loading />
          </Grid>
        ) : (
          data?.results.map((movie) => (
            <Grid key={movie.id} item xs={12} md={6} lg={4}>
              <CardMovie movie={movie} />
            </Grid>
          ))
        )}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "transparent",
        }}
      >
        <Pagination
          defaultPage={page}
          page={page}
          onChange={(e, v) => {
            setPage(v);
            window.scrollTo(0, 0);
          }}
          count={data?.total_pages}
          size="large"
          color="primary"
        />
      </Box>
    </div>
  );
}
