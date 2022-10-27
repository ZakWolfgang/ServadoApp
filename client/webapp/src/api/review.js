import client from "./client";
import { catchError, getToken } from "../utils/helper";

export const addReview = async (restaurantId, reviewData) => {
  const token = getToken();
  try {
    const { data } = await client.post(
      `/review/add/${restaurantId}`,
      reviewData,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const getReviewByRestaurant = async (restaurantId) => {
  try {
    const { data } = await client(
      `/review/get-reviews-by-restaurant/${restaurantId}`
    );
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const deleteReview = async (reviewId) => {
  const token = getToken();
  try {
    const { data } = await client.delete(`/review/${reviewId}`, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};

export const updateReview = async (reviewId, reviewData) => {
  const token = getToken();
  try {
    const { data } = await client.patch(`/review/${reviewId}`, reviewData, {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return catchError(error);
  }
};
