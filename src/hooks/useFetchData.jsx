import React, { useEffect, useState } from 'react'
import { fetchApiData } from '../utils/api';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    setData([])
    setError(null);

    fetchApiData(url)
        .then(response => {
            setLoading(false)
            setData(response)
        })
        .catch((err) => {
            setLoading(false)
            setError("Something is wrong!");
        })
  }, [url])

  return { data, loading, error };
}

export default useFetchData
