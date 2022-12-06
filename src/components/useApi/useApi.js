import { useState, useEffect } from "react";
import axios from "axios";

export default function useApi(url) {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(res.data);
    setIsLoading(false);
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return { isloading, data };
}
