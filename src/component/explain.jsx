import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../context/contextData";
 
function Explaine( ) {
  const { id } = useParams();
const {user}= useUser();
  const selectedUser = user.find((u) => u.id === id);
console.log(selectedUser);
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "800px",
        margin: "30px auto",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginBottom: "25px",
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
            padding: "10px 24px",
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
            padding: "10px 24px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Post
        </Button>
      </Box>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "25px",
          color: "#333",
        }}
      >
        Explaine Page
      </Typography>

      {selectedUser ? (
        <Paper
          elevation={4}
          sx={{
            padding: "30px",
            borderRadius: "20px",
            backgroundColor: "#f8f9fa",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#6a1b9a",
            }}
          >
            {selectedUser.name}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "#444",
              lineHeight: 1.8,
            }}
          >
            {selectedUser.Explaine}
          </Typography>
        </Paper>
      ) : (
        <Typography variant="h6" color="error">
          User Not Found
        </Typography>
      )}
    </Box>
  );
}

export default Explaine;