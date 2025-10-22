// // import { useMutation, useQueryClient } from "@tanstack/react-query";
// // import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
// // import toast from "react-hot-toast";

// // export function useDeleteBooking() {
// //   const queryClient = useQueryClient();
// //   const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
// //     mutationFn: (bookingId) => deleteBookingApi(bookingId),
// //     onSuccess: () => {
// //       toast.success("Booking successfully deleted");
// //       queryClient.invalidateQueries({ queryKey: ["bookings"] });
// //     },
// //     onError: () => toast.error("Error deleting booking"),
// //   });
// //   return { deleteBooking, isDeleting };
// // }
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
// import toast from "react-hot-toast";

// export function useDeleteBooking() {
//   const queryClient = useQueryClient();
//   const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
//     mutationFn: deleteBookingApi,
//     onSuccess: () => {
//       toast.success("Booking successfully deleted");
//       queryClient.invalidateQueries({ queryKey: ["bookings"] });
//     },
//     onError: (error) => {
//       console.error("Delete error:", error);
//       toast.error("Error deleting booking");
//     },
//   });
//   return { deleteBooking, isDeleting };
// }
// src/features/bookings/useDeleteBooking.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success("Booking successfully deleted");
      // Refresh the list
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      console.error("Delete error:", error);
      toast.error("Error deleting booking");
    },
  });

  return { deleteBooking, isDeleting };
}
