import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genra {
  id: number;
  name: String;
  slug: String;
  games_count: number;
  image_background: string;
}
interface FetchGenrasResponse {
  count: number;
  results: Genra[];
}
const useGenra = () => {
  const [genras, setGenras] = useState<Genra[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenrasResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenras(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genras, errors, isLoading };
};

export default useGenra;
