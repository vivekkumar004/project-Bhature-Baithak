import axios from "axios";
import { toast } from "react-toastify";
import { TypeOptions } from "react-toastify/dist/types";

export const extractErrorMessage = (error: Error) => {
  let message = "Something went wrong";
  if (axios.isAxiosError(error)) {
    if (error?.response) {
      message = error?.response?.data?.message;
      if (Array.isArray(message)) {
        message = message.join(",");
      }
    } else {
      message = "Something went wrong";
    }
  } else if (error.message && typeof error.message === "string") {
    message = error.message;
  }
  return message;
};

export const errorToastMessage = (error: Error) => {
  console.log(error);
  const message = extractErrorMessage(error);
  toast.error(message, {
    pauseOnHover: true,
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const toastMessage = (type: TypeOptions, message: string) => {
  toast(message, {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
    type: type,
  });
};