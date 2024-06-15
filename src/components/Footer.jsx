import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-secondary-600)",
      }}
      className="mx-auto max-w-[1520px] px-4 py-2"
    >
      <div
        style={{ color: "var(--color-secondary-300)" }}
        className="grid gap-8 px-4 py-16 lg:grid-cols-3"
      >
        <div>
          <h4 className="w-full text-3xl font-bold">
            Green<span className="text-green-500">Haven</span>
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae aliquam tempora. Dicta, accusamus dolor. Quibusdam nemo ad
            minus, veniam quos ullam. Modi ratione iusto.
          </p>
          <div className="my-6 flex justify-between md:w-[75%]">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="mt-6 flex justify-between lg:col-span-2">
          <div>
            <h6
              style={{ color: "var(--color-secondary-400)" }}
              className="font-medium"
            >
              Location
            </h6>
            <ul>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">Iran</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6
              style={{ color: "var(--color-secondary-400)" }}
              className="font-medium"
            >
              Location
            </h6>
            <ul>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">Iran</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6
              style={{ color: "var(--color-secondary-400)" }}
              className="font-medium"
            >
              Location
            </h6>
            <ul>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">Iran</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
          <div>
            <h6
              style={{ color: "var(--color-secondary-400)" }}
              className="font-medium"
            >
              Location
            </h6>
            <ul>
              <li className="py-2 text-sm">USA</li>
              <li className="py-2 text-sm">New York</li>
              <li className="py-2 text-sm">Iran</li>
              <li className="py-2 text-sm">Canada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
