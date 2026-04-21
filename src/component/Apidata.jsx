// import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FeatchData } from "../features/DataRedux";
import { useDispatch, useSelector } from "react-redux";
function FeatchDataFun() {
  // const [fetchData, setFetchData] = useState([]);
  const dispatch = useDispatch();
  const fetchData=useSelector(state=>state.ApiDataRedux.Api)
  // async function fetchProducts() {
  //     return await fetch("https://dummyjson.com/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data.products);
  //         setFetchData(data.products);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching products:", error);
  //       });
  // }

  useEffect(() => {
    // axios.get("https://dummyjson.com/products").then((response) => {
    //   console.log("Fetched products:", response.data.products);
    //   setFetchData(response.data.products);
    // });
    // fetchProducts();
    dispatch(FeatchData())
  },  [dispatch]);
  return (
    <div className="products-page">
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
      <h1 className="page-title">Products</h1>

      <div className="products-container">
        {fetchData.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />

              <h2 className="product-title">{item.title}</h2>

              <p className="product-description">{item.description}</p>

              <p className="product-price">Price: ${item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatchDataFun;
