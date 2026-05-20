"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "react-toastify";

export function BookingCancelAlert({ booking }) {

  const handleCancelBooking = async () => {
     const { data: tokenData } =
          await authClient.token();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify({ status: "cancelled" }),
        }
      );

      const data = await res.json();
if (data.success) {
  toast.success("Booking cancelled successfully");

  setTimeout(() => {
    window.location.href = "/";
  }, 1500);

} else {
  toast.error("Cancel failed");
}} catch (error) {
  console.error(error);
  toast.error("Server error");
}
  };

  return (
    <AlertDialog>

      <AlertDialog.Trigger>
        <Button variant="outline" className="text-red-500 border-red-500">
          <TrashBin /> Cancel
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              This will mark your booking as cancelled.
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                No
              </Button>

              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>

    </AlertDialog>
  );
}