import { AiOutlineArrowRight } from "react-icons/ai";
import { plantsCategories } from "../data/data";
import { useState } from "react";

function Plant() {
  const [plants, setPlants] = useState(plantsCategories);

  const filteredCat = (category) => {
    setPlants(plantsCategories.filter((plant) => plant.category === category));
  };

  return (
    <div className="mx-auto max-w-[1520px] p-4 py-12">
      <h1
        style={{ color: "var(--color-primary-500)" }}
        className="py-4 text-center text-2xl font-bold"
      >
        Plants Category
      </h1>
      <div className="mb-3 flex flex-col justify-center lg:flex-row">
        <div className="flex flex-wrap justify-center md:justify-center">
          <button
            onClick={() => setPlants(plantsCategories)}
            className="button m-1"
          >
            All
          </button>
          <button
            onClick={() => filteredCat("Foliage Plants")}
            className="button m-1"
          >
            Foliage Plants
          </button>
          <button
            onClick={() => filteredCat("Flowering Plants")}
            className="button m-1"
          >
            Flowering Plants
          </button>
          <button
            onClick={() => filteredCat("Cacti and Succulents")}
            className="button m-1"
          >
            Cacti and Succulents
          </button>
          <button
            onClick={() => filteredCat("Indoor Trees")}
            className="button m-1"
          >
            Indoor Trees
          </button>
          <button onClick={() => filteredCat("Herbs")} className="button m-1">
            Herbs
          </button>
          <button
            onClick={() => filteredCat("Air Plants")}
            className="button m-1"
          >
            Air Plants
          </button>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4">
        {plants.map((category) => (
          <div
            key={category.id}
            className="border-none duration-300 hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-[200px] w-full rounded-lg object-cover"
            />
            <div className="flex justify-between px-2 py-2">
              <p className="font-bold">{category.title}</p>
              <span
                style={{
                  backgroundColor: "var(--color-primary-500)",
                  borderColor: "var(--color-primary-300)",
                }}
                className="h-18 w-18 -mt-10 rounded-full border-8 px-2 py-4"
              >
                ${category.price}
              </span>
            </div>
            <div className="-mt-7 py-4 pl-2">
              <p className="flex items-center text-indigo-600">
                View More <AiOutlineArrowRight className="ml-2 w-5" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plant;
