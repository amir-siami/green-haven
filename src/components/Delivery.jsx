import deliveryImage from "../images/delivery.jpg";

function Delivery() {
  return (
    <div
      style={{ backgroundColor: "var(--color-white)" }}
      className="w-full px-4 py-16"
    >
      <h3
        style={{ color: "var(--color-primary-500)" }}
        className="mb-6 text-center text-2xl font-bold"
      >
        Quick Delivery App
      </h3>
      <div className="mx-auto grid max-w-[1520px] grid-cols-1 gap-4 lg:grid-cols-2">
        <img
          src={deliveryImage}
          alt="delivery"
          className="mx-auto my-4 w-[550px] rounded-2xl"
        />
        <div className="mx-auto flex flex-col justify-center">
          <p
            style={{ color: "var(--color-primary-500)" }}
            className="font-bold uppercase"
          >
            Get The App
          </p>
          <h3 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Fast and Reliable Plant Delivery
          </h3>
          <p>
            At Green Haven, we understand the importance of timely delivery for
            your green companions. Our delivery service ensures that every plant
            reaches your doorstep in perfect condition, ready to brighten up
            your space. With our extensive network and careful handling, we
            guarantee freshness and vitality from our nursery to your home.
            Whether you’re ordering a small succulent or a large indoor tree,
            our delivery team is dedicated to providing a seamless and
            hassle-free experience. Enjoy the convenience of tracking your order
            in real-time, and rest assured knowing that our eco-friendly
            packaging keeps your plants safe during transit. Let us bring the
            joy of nature to you with our exceptional delivery service.
          </p>
          <button className="button font-nedium mx-auto my-6 w-[200px] rounded-md py-3 md:mx-0">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
