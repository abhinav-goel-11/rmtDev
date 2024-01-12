import { jobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JobListProps = {
  jobItems:jobItem[],
  isLoading:boolean
}

export function JobList({jobItems,isLoading}:JobListProps) {
  return <ul className="job-list">
    {isLoading && <Spinner/>}
    {!isLoading && jobItems.map((jobItem)=>(
      <JobListItem key={jobItem.id} jobItem={jobItem}/>
    ))}
  </ul>;
}

export default JobList;
