import Link from "next/link";

const InfoBox = ({
  infoBoxData: {
    heading,
    text,
    description,
    link,
    backgroundColor,
    btnBackgroundColor,
  },
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        href={link}
        className={`${btnBackgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {text}
      </Link>
    </div>
  );
};

export default InfoBox;
