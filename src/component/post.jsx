import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import ClearIcon from '@mui/icons-material/Clear';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { TextField } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "../context/contextData";
 function Post() {
  const { user, setUser } = useUser();

  const [PostData, setPostData] = useState({
    id: uuidv4(),
    name: "",
    Explaine: "",
  });
  let AllUser = user.map((user) => (
    <Paper
      key={user.id}
      elevation={3}
      sx={{
        padding: "15px 20px",
        borderRadius: "16px",
        width: "220px",
        textAlign: "center",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <Button
        component={Link}
        to={`/post/${user.id}`}
        variant="contained"
        color="secondary"
        fullWidth
        sx={{
          borderRadius: "12px",
          padding: "10px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        {user.name}
        {/* <ClearIcon/> */}
       </Button>
    </Paper>
  ));

  function AddNewPost() {
    if (!PostData.name.trim() || !PostData.Explaine.trim()) {
      return alert("Please enter a post name and explanation");
    }
    setUser([...user, PostData]);
    console.log(PostData);
    setPostData({ id: uuidv4(), name: "", Explaine: " " });
  }
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "900px",
        margin: "30px auto",
        textAlign: "center",
      }}
    >
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="success"
        sx={{
          marginBottom: "20px",
          borderRadius: "12px",
          padding: "10px 25px",
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Home
      </Button>

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
          color: "#333",
        }}
      >
        Post Page
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          overflowY: "auto",
          maxHeight: "400px",
          padding: "10px",
          borderRadius: "16px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {AllUser}
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: 4,
          backgroundColor: "#a4fcf4ff",
          padding: 2,
          borderRadius: "16px",
          width: "85%",
        }}
      >
      {/* New Post */}
        <TextField
          onKeyDown={(e) => (e.key === "Enter" ? AddNewPost() : null)}
          value={PostData.name}
          onChange={(e) => setPostData({ ...PostData, name: e.target.value })}
          label="New Post"
          variant="outlined"
          sx={{
            width: "70%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#131313ff",
              },
              "&:hover fieldset": {
                borderColor: "#f51606ff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#060af5ff",
              },
            },
            "& input": {
              caretColor: "#0666f5ff",
            },
          }}
        />
        {/* Explanation */}
         <TextField
          onKeyDown={(e) => (e.key === "Enter" ? AddNewPost() : null)}
          value={PostData.Explaine}
          onChange={(e) => setPostData({ ...PostData, Explaine: e.target.value })}
          label="Explaination"
          variant="outlined"
          sx={{
            width: "70%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#131313ff",
              },
              "&:hover fieldset": {
                borderColor: "#f51606ff",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#060af5ff",
              },
            },
            "& input": {
              caretColor: "#0666f5ff",
            },
          }}
        />
        <Button color="info" variant="contained" onClick={() => AddNewPost()}>
          Add Post
        </Button>
      </Box>
    </Box>
  );
}

export default Post;
