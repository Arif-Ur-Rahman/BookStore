import React from "react";
import {Link} from 'react-router-dom';
import list from "../../public/list.json";
import Card from "./Card";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We Are Delighted To Have You{" "}
            <span className="text-pink-500">Here!!!</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa
            consequatur, eaque vel libero quod magni eum, corporis ipsum amet
            quos veniam nobis quae, nam ab saepe? Accusamus voluptate quidem
            inventore. Rerum reiciendis maxime placeat, illo dolor laudantium ad
            ut fugiat officia libero dolorem, sed quos saepe inventore tempora
            adipisci.
          </p>
          <Link to = '/'>
          <button className="mt-6 bg-pink-500 rounded-md text-white hover:bg-pink-700 px-4 py-2">
            Back
          </button>
          </Link>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ml-12 mr-12">
            {list.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
