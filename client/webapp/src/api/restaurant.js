import client from "./client";
import { catchError, getToken } from "../utils/helper";

export const uploadRestaurant = async (formData) => {
  const token = getToken();
  try {
    const { data } = await client.post("/restaurant/create", formData, {
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

export const getRestaurantForUpdate = async (id) => {
  const token = getToken();
  try {
    const { data } = await client("/restaurant/for-update/" + id, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getRestaurants = async (pageNo, limit) => {
  const token = getToken();
  try {
    const { data } = await client(
      `/restaurant/restaurants?pageNo=${pageNo}&limit=${limit}`,
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

export const updateRestaurant = async (id, formData) => {
  const token = getToken();
  try {
    const { data } = await client.patch("/restuarant/update/" + id, formData, {
      headers: {
        authorization: "Bearer " + token,
        "content-type": "multipart-form-data",
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const deleteRestaurant = async (id) => {
  const token = getToken();
  try {
    const { data } = await client.delete(`/restaurant/${id}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const searchRestaurantForAdmin = async (name) => {
  const token = getToken();
  try {
    const { data } = await client(`/restaurant/search?name=${name}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getTopRatedRestaurants = async (type, signal) => {
  try {
    let endpoint = "/restaurant/top-rated";
    if (type) endpoint = endpoint + "?type=" + type;

    const { data } = await client(endpoint, { signal });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getLatestUploads = async (signal) => {
  try {
    const { data } = await client("/restaurant/latest-uploads", { signal });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getSingleRestaurant = async (id) => {
  try {
    const { data } = await client("/restaurant/single/" + id);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getRelatedRestaurants = async (id) => {
  try {
    const { data } = await client("/restaurant/related/" + id);
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const searchPublicRestaurants = async (name) => {
  try {
    const { data } = await client("/restaurant/search-public?name=" + name);
    return data;
  } catch (error) {
    return catchError(error);
  }
};
