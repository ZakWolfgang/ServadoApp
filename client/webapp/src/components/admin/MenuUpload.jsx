import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { uploadMenuItem } from "../../api/menu";
import { useNotification } from "../../hooks";
import ModalContainer from "../models/ModalContainer";
import MenuForm from "./MenuForm";

export default function MenuUpload({ visible, onClose }) {
  const [pictureSelected, setPictureSelected] = useState(false);
  const [pictureUploaded, setPictureUploaded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [pictureInfo, setPictureInfo] = useState({});
  const [busy, setBusy] = useState(false);

  const { updateNotification } = useNotification();

  const handleTypeError = (error) => {
    updateNotification("error", error);
  };

  const handleUploadMenuItem = async (data) => {
    const { error, url, public_id } = await uploadMenuItem(
      data,
      setUploadProgress
    );
    if (error) return updateNotification("error", error);

    setPictureUploaded(true);
    setPictureInfo({ url, public_id });
  };

  const handleChange = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    setPictureSelected(true);
    handleUploadMenuItem(formData);
  };

  const getUploadProgressValue = () => {
    if (!pictureUploaded && uploadProgress >= 100) {
      return "Processing";
    }

    return `Upload progress ${uploadProgress}%`;
  };

  const handleSubmit = async (data) => {
    if (!pictureInfo.url || !pictureInfo.public_id)
      return updateNotification("error", "Menu Item is missing!");

    setBusy(true);
    data.append("menu", JSON.stringify(pictureInfo));
    const res = await uploadMenuItem(data);
    setBusy(false);
    console.log(res);

    onClose();
  };

  return (
    <ModalContainer visible={visible}>
      <div className="mb-5">
        <UploadProgress
          visible={!pictureUploaded && pictureSelected}
          message={getUploadProgressValue()}
          width={uploadProgress}
        />
      </div>
      {!pictureSelected ? (
        <MenuItemSelector
          visible={!pictureSelected}
          onTypeError={handleTypeError}
          handleChange={handleChange}
        />
      ) : (
        <MenuForm busy={busy} onSubmit={!busy ? handleSubmit : null} />
      )}
    </ModalContainer>
  );
}

const MenuItemSelector = ({ visible, handleChange, onTypeError }) => {
  if (!visible) return null;
  const fileTypes = ["JPG", "PNG", "GIF"];
  return (
    <div className="h-full flex items-center justify-center">
      <FileUploader
        handleChange={handleChange}
        onTypeError={onTypeError}
        types={fileTypes}
      >
        <div className="w-48 h-48 border border-dashed dark:border-dark-subtle border-light-subtle rounded-full flex flex-col items-center justify-center dark:text-dark-subtle text-secondary cursor-pointer">
          <AiOutlineCloudUpload size={80} />
          <p>Drop your file here!</p>
        </div>
      </FileUploader>
    </div>
  );
};

const UploadProgress = ({ width, message, visible }) => {
  if (!visible) return null;

  return (
    <div className="dark:bg-secondary bg-white drop-shadow-lg rounded p-3">
      <div className="relative h-3 dark:bg-dark-subtle bg-light-subtle overflow-hidden">
        <div
          style={{ width: width + "%" }}
          className="h-full absolute left-0 dark:bg-white bg-secondary"
        />
      </div>
      <p className="font-semibold dark:text-dark-subtle text-light-subtle animate-pulse mt-1">
        {message}
      </p>
    </div>
  );
};
