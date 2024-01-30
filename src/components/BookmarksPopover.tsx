import { useBookmarkContext } from "../lib/hooks";
import JobList from "./JobList";

export default function BookmarksPopover() {

  const {bookmarkedJobItems ,isLoading} = useBookmarkContext()
  return <div className="bookmarks-popover">
    <JobList jobItems={bookmarkedJobItems} isLoading={isLoading}/>
  </div>;
}
