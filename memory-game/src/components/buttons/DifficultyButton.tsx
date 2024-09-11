"use client";

const DifficultyButton = ({
  className,
  value,
  difficulty,
  onClick,
  id,
}: {
  id: string;
  className?: string;
  value: number;
  // difficulty: "easy" | "medium" | "hard";
  difficulty: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={className} id={id} onClick={onClick} value={value}>
      {difficulty}
    </button>
  );
};

export default DifficultyButton;
