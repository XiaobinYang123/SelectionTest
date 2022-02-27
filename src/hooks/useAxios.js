import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3333/submissions";

export const useAxios = (axiosParams) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return [loading, data, error];
};
