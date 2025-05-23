import { useState, useEffect } from "react";

interface ApiResponse<T> {
  status: number;
  statusText: string;
  data: T | null;
  error: Error | null;
  loading: boolean;
}

function useFetch<T>(url: string, options?: RequestInit): ApiResponse<T> {
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        setStatus(response.status);
        setStatusText(response.statusText);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { status, statusText, data, error, loading };
}

export default useFetch;
