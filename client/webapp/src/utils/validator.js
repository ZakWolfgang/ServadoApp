export const validateMenuItem = (menuInfo) => {
    const {name, description, status, type, tags} = menuInfo;

    if (!name.trim()) return { error: "Name is missing!" };
    if (!description.trim()) return { error: "Description is missing!" };
    if (!status.trim()) return { error: "Status is missing!" };
    if (!type.trim()) return { error: "Type is missing!" };

  if (!tags.length) return { error: "Tags are missing!" };
  for (let tag of tags) {
    if (!tag.trim()) return { error: "Invalid tags!" };
  }

}
