import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
export interface Genra {
  id: number;
  name: String;
  slug: String;
  games_count: number;
  image_background: string;
}

const useGenra = () => useData<Genra>("/genres");
 

export default useGenra;
