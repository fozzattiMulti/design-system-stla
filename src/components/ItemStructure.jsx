const ItemStructure = (props) => {
  ItemStructure.propTypes;

  return (
    <div className="px-8">
      <h2 className="border-b-2 border-gray-100 text-xl text-blue py-2">
        {props.title}
      </h2>
      <p className="text-sm py-4">{props.description}</p>
      <div className="max-w-md flex items-center justify-center">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default ItemStructure;
