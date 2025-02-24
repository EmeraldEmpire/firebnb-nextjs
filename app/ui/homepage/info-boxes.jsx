import InfoBox from "./info-box";

const InfoBoxes = () => {
  const infoBoxesData = [
    {
      heading: "For Renters",
      text: "Browse Properties",
      description:
        "Find your dream rental property. Bookmark properties and contact owners",
      link: "/properties",
      backgroundColor: "bg-gray-100",
      btnBackgroundColor: "bg-black",
    },
    {
      heading: "For Property Owners",
      text: "Add Property",
      description:
        "List your properties and reach potential tenants. Rent as an airbnb or long term.",
      link: "/properties/add",
      backgroundColor: "bg-blue-100",
      btnBackgroundColor: "bg-blue-500",
    },
  ];

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {infoBoxesData.map((infoBoxData, index) => (
            <InfoBox key={index} infoBoxData={infoBoxData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
