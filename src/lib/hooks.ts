import { useState, useEffect } from "react";
import { jobItem, jobItemExpanded } from "./types";
import { BASE_API_URL } from "./constants";

export function useJobItem(id: number | null) {
  const [jobItem, setJobItem] = useState<jobItemExpanded | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItem(data?.jobItem);
    };
    fetchData();
  }, [id]);
  return [jobItem,isLoading] as const;
}

export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  return activeId;
}
export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<jobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const totalNumberOfResults = jobItems.length
  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data?.jobItems);
    };
    fetchData();
  }, [searchText]);
  return [jobItemsSliced, isLoading,totalNumberOfResults] as const;
}
