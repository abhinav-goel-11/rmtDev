import { createContext } from "react";
import { useLocalStorage } from "../lib/hooks";

type BookmarksContext = {
  bookmarkedIds: number[];
  handleBookmarkToggle: (id: number) => void;
};
export const BookmarksContext = createContext<BookmarksContext | null>(null);

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkIds",
    []
  );
  const handleBookmarkToggle = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleBookmarkToggle,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}


