export const getErrorMsg = (err: Error | unknown) => {
  console.log(err);
  return err instanceof Error
    ? err.message || "Something went wrong"
    : typeof err == "string"
    ? err
    : "An unexpected error occurred";
};
