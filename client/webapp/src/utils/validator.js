export const validateMenuItem = (menuInfo) => {
    const {name, description, status} = menuInfo;

    if (!name?.trim()) return { error: "Name is missing!" };
    if (!description?.trim()) return { error: "Description is missing!" };
    if (!status?.trim()) return { error: "Status is missing!" };
}
