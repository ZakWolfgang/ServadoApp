import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import GridContainer from "../GridContainer";

const trimName = (text = "") => {
  if (text.length <= 20) return text;
  return text.substring(0, 20) + "..";
};

export default function MenuList({ name, menu = [] }) {
  if (!menu.length) return null;

  return (
    <div>
      <h1 className="text-2xl dark:text-white text-secondary font-semibold mb-5">
        {name}
      </h1>
      <GridContainer>
        {menu.map((menuItem) => {
          return <ListItem key={menuItem.id} movie={menuItem} />;
        })}
      </GridContainer>
    </div>
  );
}

const ListItem = ({ movie: menuItem }) => {
  const { id, name, poster, reviews } = menuItem;
  return (
    <Link to={"/menuItem/" + id}>
      <img
        className="aspect-video object-cover w-full"
        src={poster}
        alt={name}
      />
      <h1
        className="text-lg dark:text-white text-secondary font-semibold"
        name={name}
      >
        {trimName(name)}
      </h1>
      {reviews?.ratingAvg ? (
        <p className="text-highlight dark:text-highlight-dark flex items-center space-x-1">
          <span>{reviews?.ratingAvg}</span>
          <AiFillStar />
        </p>
      ) : (
        <p className="text-highlight dark:text-highlight-dark">No reviews</p>
      )}
    </Link>
  );
};
