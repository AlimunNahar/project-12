import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ productInfo, setProductsInfo }) => {
  const { user } = useContext(AuthContext);
  const { product_name, resale_price, img } = productInfo;
  // console.log(productInfo);

  const handleBooking = (event) => {
    event.preventDefault();

    const form = event.target;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
      product_name,
      email: user.email,
      displayName: user.displayName,
      phone,
      location,
      resale_price,
      img,
    };
    // console.log(booking);

    // send booked products data to the server
    fetch("https://puresnuggle-server.vercel.app/bookedItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          setProductsInfo("");
          toast.success("Booking Confirmed");
          form.reset();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my-bookings" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-bookings"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product_name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              placeholder="Your Name"
              defaultValue={user?.displayName}
              className="input w-full input-bordered"
            />

            <input
              type="email"
              disabled
              value={user?.email}
              className="input w-full input-bordered "
            />

            <input
              type="text"
              defaultValue={resale_price}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
              required
            />

            <select
              name="location"
              className="select select-bordered w-full"
              required
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Barishal">Barishal</option>
              <option value="Khulna">Khulna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
            </select>

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
