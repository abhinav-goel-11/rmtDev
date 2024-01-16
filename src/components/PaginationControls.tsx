import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
type PaginationControlsProps = {
  onClick: (direction: "previous" | "next") => void;
  currentPage: number;
  totalNumberOfPages: number;
};
export default function PaginationControls({
  onClick,
  currentPage,
  totalNumberOfPages,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          onClick={() => onClick("previous")}
          direction={"previous"}
          currentPage={currentPage}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          onClick={() => onClick("next")}
          direction={"next"}
          currentPage={currentPage}
        />
      )}
    </section>
  );
}
type PaginationButtonProps = {
  onClick: () => void;
  direction: "next" | "previous";
  currentPage: number;
};

function PaginationButton({
  onClick,
  direction,
  currentPage,
}: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
