import React from "react";
import Layout from "../Layout/Layout";
import { Box, Stack, Paper } from "@mui/material";
import "../Home/HomeStyle.css";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import createquize from "../../images/createquize.jpeg"
import playqize from "../../images/playqize.jpeg"
import myQuizes from "../../images/myQuizes.jpeg"

const Item = styled(Paper)(({ theme }) => ({
  height: "350px",
  width: "30vw",
  padding: theme.spacing(1),
  display: "flex",
}));

const Home = () => {
  return (
    <Layout>
      <Box className="Home-Box1" sx={{ p: 2 }}>
        <Stack
          direction="row"
          className="stack"
          sx={{ display: { xs: "block", sm: "flex" } }}
        >
          <Item
            className="content-box"
            sx={{
              backgroundImage: `url(${createquize})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              "@media(max-width:600px)": {
                height: "250px",
                width: "300px",
                marginBottom: "20px",
              },
            }}
          >
            <Link to="/newquiz"></Link>
          </Item>
          <Item
            className="content-box"
            sx={{
              maxWidth: "350",
              backgroundImage: `url(${myQuizes})`,
              backgroundSize: "cover",
              borderRadius: "20px",
              "@media(max-width:600px)": { height: "250px", width: "300px" },
            }}
          >
            <Link to="/Quiz"></Link>
          </Item>
          <Item
            className="content-box"
            sx={{
              maxWidth: "350",
              backgroundImage: `url(${playqize})`,
              backgroundSize: "cover",
              borderRadius: "20px",
              "@media(max-width:600px)": {
                height: "250px",
                width: "300px",
                marginTop: "20px",
              },
            }}
          >
            <Link to="/PlayQuiz"></Link>
          </Item>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
