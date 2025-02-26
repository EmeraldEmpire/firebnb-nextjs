import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

const PropertyCard = ({
  property: {
    _id,
    owner,
    name,
    type,
    description,
    location,
    beds,
    baths,
    square_feet,
    amenities,
    rates,
    seller_info,
    images,
  },
}) => {
  const getRateDisplay = () => {
    //@ My Original Idea for displaying the rate frequency
    //@ Paused for now
    //*
    // let result = "";
    // for (const [key, value] of Object.entries(rates)) {
    //   let rateFrequency =
    //     key === "monthly"
    //       ? "/mo"
    //       : key === "weekly"
    //       ? "/wk |"
    //       : key === "nightly" && "/nightly |";
    //   result = result.concat("$", value, rateFrequency, " ");
    // }
    // return result;

    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    }
    if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    }
    if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={`/properties/${images[0]}`}
        alt=""
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline" /> {beds}{" "}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline" /> {baths}{" "}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline" />
            {square_feet} <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <FaMoneyBill className="inline" /> Weekly
          </p>
          <p>
            <FaMoneyBill className="inline" /> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="text-orange-700" />
            <span className="text-orange-700">
              {" "}
              {`${location.city} ${location.state}`}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${_id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
