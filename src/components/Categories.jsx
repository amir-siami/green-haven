import { plantsBrands } from "../data/data";
import greenbg from "../images/greenbg.jpg";

function Categories() {
  return (
    <div
      style={{
        backgroundImage: `url(${greenbg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mx-auto max-w-[1520px] px-4 py-16"
    >
      <h1
        style={{ color: "var(--color-white)" }}
        className="py-2 text-center text-2xl font-bold"
      >
        Trending Categories
      </h1>

      <div className="grid grid-cols-2 gap-5 px-2 py-5 md:grid-cols-4 lg:grid-cols-6">
        {plantsBrands.map((item) => (
          <a
            key={item.id}
            href={`https://google.com/search?q=${item.title}`}
            className="relative mb-5 block h-[350px] overflow-hidden rounded-[6px]"
            target="blank"
            rel="noopener noreferrer"
          >
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              style={{
                backgroundColor: "var(--color-primary-700)",
                color: "var(--color-white)",
              }}
              className="absolute bottom-0 left-0 w-full object-cover p-2"
            >
              <h3 className="">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Categories;
