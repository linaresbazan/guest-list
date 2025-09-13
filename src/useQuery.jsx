import { useEffect } from "react";
import { useGuest } from "./GuestContext";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2507-ftb-ct-web-pt-a";
const API = BASE_URL + COHORT;

export default function useQuery(resource) {
  const {setGuestList} = useGuest();

  useEffect(() => {
    const getGuests = async () => {
      try {
        const response = await fetch(API + resource);
        if (!response.ok) throw Error(":(");
        const result = await response.json();
        setGuestList(result.data);
      } catch (e) {
        console.error(e);
      }
    };
   getGuests();
  }, [resource]);
}