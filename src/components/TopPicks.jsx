import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { topPicks } from "../data/data"; // Assuming correct path to your data file

function TopPicks() {
  return (
    <div
      style={{ backgroundColor: "var(--color-secondary-200)" }}
      className="w-full px-4 py-16"
    >
      <h1
        style={{ color: "var(--color-primary-500)" }}
        className="py-4 text-center text-2xl font-bold"
      >
        Top picks
      </h1>

      <div className="mx-auto hidden max-w-[1520px] lg:flex">
        <Splide
          options={{
            type: "loop",
            perPage: 4, // Display 4 slides per page initially
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            resetProgress: false,
            grap: "free",
            arrows: false,
            pagination: true,
            breakpoints: {
              1024: {
                perPage: 2, // Reduce to 2 slides per page on screens >= 1024px
              },
              640: {
                perPage: 1, // Display 1 slide per page on screens < 640px
              },
            },
          }}
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative rounded-3xl">
                <div
                  style={{
                    backgroundColor: "var(--color-black-opacity-60)",
                    color: "var(--color-white)",
                  }}
                  className="absolute h-full w-full rounded-3xl"
                >
                  <p className="px-2 pt-4 text-2xl font-bold">{item.title}</p>
                  <p className="px-2">${`${item.price.toFixed(2)}`}</p>
                  <button
                    style={{
                      color: "var(--color-white)",
                    }}
                    className="absolute bottom-4 mx-2 border-2 border-dashed border-white uppercase"
                  >
                    Add to cart
                  </button>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-4 h-[200px] w-full cursor-pointer rounded-3xl object-cover duration-300 ease-out hover:scale-105"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default TopPicks;
