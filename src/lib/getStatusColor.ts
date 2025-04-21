export const getStatusColor = (
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT"
) => {
  switch (status) {
    case "NOT_STARTED":
      return "bg-gray-400 text-gray-800";
    case "ON_PROGRESS":
      return "bg-blue-400 text-white";
    case "DONE":
      return "bg-green-400 text-white";
    case "REJECT":
      return "bg-red-400 text-white";
    default:
      return "bg-gray-200 text-gray-700"; // Default warna
  }
};
