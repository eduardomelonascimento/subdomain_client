import { useCallback, useState } from "react";

export default function useFetch() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();

  const request = useCallback(async (url, options) => {
    let response, json;
    try {
      setError();
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.error);
      setData(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, setData, error, loading, request };
}
