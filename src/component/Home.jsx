import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
 import { Plus } from "../features/DataSlice";
function Home() {
  
  return (
    <>
    <Paper
      elevation={4}
      sx={{
        width: "90%",
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "20px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="success"
          sx={{
            borderRadius: "12px",
            padding: "10px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Home
        </Button>

        <Button
          component={Link}
          to="/post"
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: "12px",
            padding: "10px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Post
        </Button>

        <Button
          component={Link}
          to="/FetchData"
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: "12px",
            padding: "10px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Product
        </Button>
      </Box>
      
    </Paper>
    <h1>
           Welcome In My App
       </h1>
    </>
  );
}

export default Home;
