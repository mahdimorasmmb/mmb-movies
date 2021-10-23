import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import CardMovie from "../component/CardMovie";

export default function SearchMoviePage() {
  const search = useSelector((state) => state.search);
  return (
    <div>
      <h2 className="text-3xl  mx-6 mt-5 font-bold text-gray-200">
        Popular Movie
      </h2>
      <Grid container spacing={1}>
        {search?.results?.map((movie) => (
          <Grid item xs={12} md={4} lg={3}>
            <CardMovie movie={movie} />
          </Grid>
        ))}
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
          defaultPage={search.page}
          page={search.page}
          onChange={(e, v) => {
            window.scrollTo(0, 0);
          }}
          count={search?.total_pages}
          size="large"
          color="primary"
        />
      </Box>
    </div>
  );
}
