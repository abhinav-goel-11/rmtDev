import { forwardRef } from "react";
import { useBookmarkContext } from "../lib/hooks";
import JobList from "./JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>(function(_,ref) {

  const {bookmarkedJobItems ,isLoading} = useBookmarkContext()
  return <div ref={ref} className="bookmarks-popover">
    <JobList jobItems={bookmarkedJobItems} isLoading={isLoading}/>
  </div>;
})

export default BookmarksPopover;
