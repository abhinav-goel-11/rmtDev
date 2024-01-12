import { useState, useEffect } from "react";
import { jobItem } from "./types";

export function useActiveId(){
    const [activeId,setActiveId] = useState<number | null>(null)

  useEffect(()=>{
    const handleHashChange = () => {
      const id = +window.location.hash.slice(1);
      setActiveId(id)
    }
    handleHashChange()
    window.addEventListener('hashchange',handleHashChange);

    return () => {
      window.removeEventListener('hashchange',handleHashChange);
    }
  },[])
  return activeId;
}
export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<jobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`
      );
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data?.jobItems);
    };
    fetchData();
  }, [searchText]);
  return [jobItemsSliced, isLoading] as const;
}
