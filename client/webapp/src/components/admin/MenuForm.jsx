import React, { useEffect, useState } from "react";
import { useNotification } from "../../hooks";
import {
  statusOptions,
  typeOptions,
} from "../../utils/options";
import { commonInputClasses } from "../../utils/theme";
import { validateMenuItem } from "../../utils/validator";
import Submit from "../form/Submit";
import Label from "../Label";
import PosterSelector from "../PosterSelector";
import Selector from "../Selector";
import TagsInput from "../TagsInput";

const defaultMenuItemInfo = {
  name: "",
  description: "",
  tags: [],
  poster: null,
  type: "",
  status: "",
};

export default function MenuForm({ busy, btnTitle, initialState, onSubmit }) {
  const [menuItemInfo, setMenuItemInfo] = useState({ ...defaultMenuItemInfo });
  const [selectedPosterForUI, setSelectedPosterForUI] = useState("");

  const { updateNotification } = useNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = validateMenuItem(menuItemInfo);
    if (error) return updateNotification("error", error);

    const { tags, poster } = menuItemInfo;

    const formData = new FormData();
    const finalMenuItemInfo = {
      ...menuItemInfo,
    };

    finalMenuItemInfo.tags = JSON.stringify(tags);

    for (let key in finalMenuItemInfo) {
      formData.append(key, finalMenuItemInfo[key]);
    }

    onSubmit(formData);
  };

  const updatePosterForUI = (file) => {
    const url = URL.createObjectURL(file);
    setSelectedPosterForUI(url);
  };

  const handleChange = ({ target }) => {
    const { value, name, files } = target;
    if (name === "poster") {
      const poster = files[0];
      updatePosterForUI(poster);
      return setMenuItemInfo({ ...menuItemInfo, poster });
    }

    setMenuItemInfo({ ...menuItemInfo, [name]: value });
  };

  const updateTags = (tags) => {
    setMenuItemInfo({ ...menuItemInfo, tags });
  };

  useEffect(() => {
    if (initialState) {
      setMenuItemInfo({
        ...initialState,
        poster: null,
      });
      setSelectedPosterForUI(initialState.poster);
    }
  }, [initialState]);

  const { name, description, tags, type, status } = menuItemInfo;

  return (
    <>
      <div onSubmit={handleSubmit} className="flex space-x-3">
        <div className="w-[70%] space-y-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <input
              id="name"
              value={name}
              onChange={handleChange}
              name="name"
              type="text"
              className={
                commonInputClasses + " border-b-2 font-semibold text-xl"
              }
              placeholder="Crawfish Etouffe"
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <textarea
              value={description}
              onChange={handleChange}
              name="description"
              id="description"
              className={commonInputClasses + " border-b-2 resize-none h-24"}
              placeholder="Menu Item description..."
            ></textarea>
          </div>

          <div>
            <Label htmlFor="tags">Tags</Label>
            <TagsInput value={tags} name="tags" onChange={updateTags} />
          </div>

          <Submit
            busy={busy}
            value={btnTitle}
            onClick={handleSubmit}
            type="button"
          />
        </div>
        <div className="w-[30%] space-y-5">
          <PosterSelector
            name="poster"
            onChange={handleChange}
            selectedPoster={selectedPosterForUI}
            label="Select Picture"
            accept="image/jpg, image/jpeg, image/png"
          />

          <Selector
            onChange={handleChange}
            name="type"
            value={type}
            options={typeOptions}
            label="Type"
          />

          <Selector
            onChange={handleChange}
            name="status"
            value={status}
            options={statusOptions}
            label="Status"
          />
        </div>
      </div>
    </>
  );
}
