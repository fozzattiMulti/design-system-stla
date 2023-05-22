
const ColorGuide = () => {
  return (
    <div>
      <h2 className="text-4xl text-blue font-bold py-2 px-8">Color Guide</h2>
      <div className="px-8 py-2 flex flex-1 flex-col lg:flex-row	 ">      
        <div className="w-24 h-24 bg-red flex justify-end flex-col my-4 lg:my-0  items-center mx-2 shadow-xl">
          <span>#FF0000</span>
        </div>
        <div className="w-24 h-24 bg-black flex justify-end flex-col my-4 lg:my-0  items-center mx-2 shadow-xl">
          <span className="text-white">#FF0000</span>
        </div>
        <div className="w-24 h-24 bg-white flex justify-end flex-col my-4 lg:my-0  items-center mx-2 shadow-xl">
          <span>#FF0000</span>
        </div>
        <div className="w-24 h-24 bg-gray-500 flex justify-end flex-col my-4 lg:my-0  items-center mx-2 shadow-xl">
          <span>#FF0000</span>
        </div>
        <div className="w-24 h-24 bg-gray-300 flex justify-end flex-col my-4 lg:my-0  items-center mx-2 shadow-xl">
          <span>#FF0000</span>
        </div>
        <div className="w-24 h-24 bg-gray-100 flex justify-end flex-col my-4 lg:my-0  items-center mx-2 shadow-xl">
          <span>#FF0000</span>
        </div>
      </div>
    </div>
  )
}

export default ColorGuide