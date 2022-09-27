import React from "react";

export default function NextAndPrevButton({
  className = "",
  onNextClick,
  onPrevClick,
}) {
  const getClasses = () => {
    return "flex justify-end items-center space-x-3 ";
  };

  return (
    <div className={getClasses() + className}>
      <Button onClick={onPrevClick} name="Prev" />
      <Button onClick={onNextClick} name="Next" />
    </div>
  );
}

const Button = ({ name, onClick }) => {
  return (
    <button
      type="button"
      className="text-primary dark:text-white hover:underline"
      onClick={onClick}
    >
      {name}
    </button>
  );
};
