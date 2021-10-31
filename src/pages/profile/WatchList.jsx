import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CardMovie from "../../component/CardMovie";

export default function WatchList() {
  const watchList = useSelector((state) => state.profile?.watchList);

  return (
    <div>
      <Grid container spacing={1} justifyContent="center" alignContent="center">
        <Grid item xs={12}>
          <h2 className="text-3xl  mx-6 mt-5 font-bold text-gray-200">
            Watch List movie
          </h2>
        </Grid>
        {watchList.movies?.results.map((movie) => (
          <Grid item xs={12} md={4} lg={4}>
            <CardMovie movie={movie} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <h2 className="text-3xl  mx-6 mt-5 font-bold text-gray-200">
            Watch List tv
          </h2>
        </Grid>
        {watchList.tv?.results.map((movie) => (
          <Grid item xs={12} md={4} lg={4}>
            <CardMovie movie={movie} />
          </Grid>
        ))}
      </Grid>

      {/* <Box
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
      </Box> */}
    </div>
  );
}
