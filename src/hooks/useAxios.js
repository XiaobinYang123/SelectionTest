import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchData(params);
  }, []);

  return [loading, data, error];
};
