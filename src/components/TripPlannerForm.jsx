// import React, { useState } from "react";

// const TripPlannerForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     selected_destination: "",
//     date_of_arrival: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//       <div className="bg-white p-2   z-20 rounded-lg shadow-lg w-[400px] max-[600px]:w-[320px] max-[400px]:w-[280px] relative px-4 pb-4">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl -m-2"
//         >
//           ×
//         </button>
//         <h2 className="text-2xl font-bold mb-2 text-center text-blue-900">Plan Your Trip</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" name="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.name} onChange={handleChange} />
//           <input type="email" placeholder="Email" name="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={handleChange} />
//           <input type="number" placeholder="Phone" name="phone" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.phone} onChange={handleChange} />
//           <select name="selected_destination" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" value={formData.selected_destination} onChange={handleChange}>
//             <option value="" disabled>Select Destination</option>
//             {["Kerala","Goa","Delhi","Rajasthan","Ladakh","Andaman","Thailand","UAE","Indonesia","Maldives","USA","Japan"].map(dest => (
//               <option key={dest} value={dest}>{dest}</option>
//             ))}
//           </select>
//           <div className="my-5">
//             <label htmlFor="date_of_arrival">Date Of Arrival</label>
//             <input id="date_of_arrival" type="date" name="date_of_arrival" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" value={formData.date_of_arrival} onChange={handleChange} />
//           </div>
//           <button type="submit" className="w-full p-3 text-white bg-blue-900 rounded-lg hover:opacity-90 transition">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default TripPlannerForm;
import React, { useState } from "react";
import Swal from "sweetalert2";

const TripPlannerForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selected_destination: "",
    date_of_arrival: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Replace with your API endpoint
      const res = await fetch("https://your-api.com/trip-planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Trip Planned!",
          text: "We’ll get back to you soon.",
          confirmButtonColor: "#1e3a8a",
        });
        onClose();
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please check your internet connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-3">
      <div className="bg-white z-20 rounded-xl shadow-lg w-full max-w-[420px] sm:max-w-[380px] xs:max-w-[320px] relative px-5 py-6 z-20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-3xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Plan Your Trip
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Destination */}
          <select
            name="selected_destination"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
            value={formData.selected_destination}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Destination
            </option>
            {[
              "Kerala",
              "Goa",
              "Delhi",
              "Rajasthan",
              "Ladakh",
              "Andaman",
              "Thailand",
              "UAE",
              "Indonesia",
              "Maldives",
              "USA",
              "Japan",
            ].map((dest) => (
              <option key={dest} value={dest}>
                {dest}
              </option>
            ))}
          </select>

          {/* Date */}
          <div>
            <label
              htmlFor="date_of_arrival"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date Of Arrival
            </label>
            <input
              id="date_of_arrival"
              type="date"
              name="date_of_arrival"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              value={formData.date_of_arrival}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 text-white bg-blue-900 rounded-lg hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TripPlannerForm;
