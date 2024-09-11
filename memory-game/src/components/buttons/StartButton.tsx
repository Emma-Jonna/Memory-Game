"use client";

const StartButton = ({
  className,
  disabled,
  onClick,
}: {
  className?: string;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className={className} onClick={onClick}>
      <p>Start</p>
    </button>
  );
};

export default StartButton;
