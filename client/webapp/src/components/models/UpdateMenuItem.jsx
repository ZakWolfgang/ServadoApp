import React, { useEffect, useState } from "react";
import { getMenuItemForUpdate, updateMenuItem } from "../../api/menu";
import { useNotification } from "../../hooks";
import MenuForm from "../admin/MenuForm";
import ModalContainer from "./ModalContainer";

export default function UpdateMenuItem({ menuItemId, visible, onSuccess }) {
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const { updateNotification } = useNotification();

  const handleSubmit = async (data) => {
    setBusy(true);
    const { error, menuItem, message } = await updateMenuItem(menuItemId, data);
    setBusy(false);
    if (error) return updateNotification("error", error);

    updateNotification("success", message);
    onSuccess(menuItem);
  };

  const fetchMenuItemToUpdate = async () => {
    const { menuItem, error } = await getMenuItemForUpdate(menuItemId);
    if (error) return updateNotification("error", error);
    setReady(true);
    setSelectedMenuItem(menuItem);
  };

  useEffect(() => {
    if (menuItemId) fetchMenuItemToUpdate();
  }, [menuItemId]);

  return (
    <ModalContainer visible={visible}>
      {ready ? (
        <MenuForm
          initialState={selectedMenuItem}
          btnTitle="Update"
          onSubmit={!busy ? handleSubmit : null}
          busy={busy}
        />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-light-subtle dark:text-dark-subtle animate-pulse text-xl">
            Please wait...
          </p>
        </div>
      )}
    </ModalContainer>
  );
}
