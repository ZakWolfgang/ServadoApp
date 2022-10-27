// import React, { useState } from "react";
// import { BsTrash, BsPencilSquare, BsBoxArrowUpRight } from "react-icons/bs";
// import { deleteMenuItem } from "../api/menu";
// import { useNotification } from "../hooks";
// import ConfirmModal from "./models/ConfirmModal";
// import UpdateMenuItem from "./models/UpdateMenuItem";

// const MenuItemList = ({ menuItem, afterDelete, afterUpdate }) => {
//   const [showConfirmModal, setShowConfirmModal] = useState(false);
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [busy, setBusy] = useState(false);
//   const [selectedMenuItemId, setSelectedMenuItemId] = useState(null);

//   const { updateNotification } = useNotification();

//   const handleOnDeleteConfirm = async () => {
//     setBusy(true);
//     const { error, message } = await deleteMenuItem(menuItem.id);
//     setBusy(false);

//     if (error) return updateNotification("error", error);

//     hideConfirmModal();
//     updateNotification("success", message);
//     afterDelete(menuItem);
//   };

//   const handleOnEditClick = () => {
//     setShowUpdateModal(true);
//     setSelectedMenuItemId(menuItem.id);
//   };

//   const handleOnUpdate = (menuItem) => {
//     afterUpdate(menuItem);
//     setShowUpdateModal(false);
//     setSelectedMenuItemId(null);
//   };

//   const displayConfirmModal = () => setShowConfirmModal(true);
//   const hideConfirmModal = () => setShowConfirmModal(false);

//   return (
//     <>
//       <MenuItemCard
//         menuItem={menuItem}
//         onDeleteClick={displayConfirmModal}
//         onEditClick={handleOnEditClick}
//       />
//       <div className="p-0">
//         <ConfirmModal
//           visible={showConfirmModal}
//           onConfirm={handleOnDeleteConfirm}
//           onCancel={hideConfirmModal}
//           name="Are you sure?"
//           subtitle="This action will remove this Menu Item permanently!"
//           busy={busy}
//         />
//         <UpdateMenuItem
//           menuItemId={selectedMenuItemId}
//           visible={showUpdateModal}
//           onSuccess={handleOnUpdate}
//         />
//       </div>
//     </>
//   );
// };

// const MenuItemCard = ({ menuItem, onDeleteClick, onEditClick, onOpenClick }) => {
//   const { poster, name, status } = menuItem;
//   return (
//     <table className="w-full border-b">
//       <tbody>
//         <tr>
//           <td>
//             <div className="w-24">
//               <img className="w-full aspect-video" src={poster} alt={name} />
//             </div>
//           </td>

//           <td className="w-full pl-5">
//             <div>
//               <h1 className="text-lg font-semibold text-primary dark:text-white">
//                 {name}
//               </h1>
//             </div>
//           </td>

//           <td className="px-5">
//             <p className="text-primary dark:text-white">{status}</p>
//           </td>

//           <td>
//             <div className="flex items-center space-x-3 text-primary dark:text-white text-lg">
//               <button onClick={onDeleteClick} type="button">
//                 <BsTrash />
//               </button>
//               <button onClick={onEditClick} type="button">
//                 <BsPencilSquare />
//               </button>
//               <button onClick={onOpenClick} type="button">
//                 <BsBoxArrowUpRight />
//               </button>
//             </div>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default MenuItemList;