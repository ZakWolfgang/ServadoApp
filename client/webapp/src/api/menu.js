import { catchError, getToken } from "../utils/helper";
import client from "./client";

export const uploadMenuItem = async (formData) => {
    const token = getToken();
    try {
      const { data } = await client.post("/menuItem/create", formData, {
        headers: {
          authorization: "Bearer " + token,
          "content-type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  
  export const getMenuItemForUpdate = async (id) => {
    const token = getToken();
    try {
      const { data } = await client("/menuItem/for-update/" + id, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  
  export const getMenu = async (pageNo, limit) => {
    const token = getToken();
    try {
      const { data } = await client(
        `/menuItem/menu?pageNo=${pageNo}&limit=${limit}`,
        {
          headers: {
            authorization: "Bearer " + token,
            "content-type": "multipart/form-data",
          },
        }
      );
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  
  export const updateMenuItem = async (id, formData) => {
    const token = getToken();
    try {
      const { data } = await client.patch("/menuItem/update/" + id, formData, {
        headers: {
          authorization: "Bearer " + token,
          "content-type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  
  export const deleteMenuItem = async (id) => {
    const token = getToken();
    try {
      const { data } = await client.delete(`/menuItem/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  
  export const searchMenuItemForAdmin = async (name) => {
    const token = getToken();
    try {
      const { data } = await client(`/menuItem/search?name=${name}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  
  export const getTopRatedMenu = async (type) => {
    try {
      let endpoint = "/menuItem/top-rated";
      if (type) endpoint = endpoint + "?type=" + type;
  
      const { data } = await client(endpoint);
      return data;
    } catch (error) {
      return catchError(error);
    }
  };

  export const getLatestUploads = async () => {
    try {
      const { data } = await client("/menuItem/latest-uploads");
      return data;
    } catch (error) {
      return catchError(error);
    }
  };
  