import { SortBy } from "../lib/types";

type SortingControlsProps = {
  onClick: (newSortBy: SortBy) => void;
  sortBy: SortBy;
};
export default function SortingControls({
  onClick,
  sortBy,
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={() => onClick("relevance")}
        isActive={sortBy === "relevance"}
      >
        Relevance
      </SortingButton>
      <SortingButton
        onClick={() => onClick("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}
type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};
function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--relevant ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
