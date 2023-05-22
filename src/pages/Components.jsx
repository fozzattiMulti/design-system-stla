import ItemStructure from "../components/ItemStructure"
import BottomBar from "../assets/bottomBar.jpg"
import background from "../assets/background.jpg"
import icons from "../assets/icons.jpeg"
import boxFrameRadio from "../assets/boxframeRadio.jpg"
import boxFrameBT from "../assets/boxframeBT.jpg"
import boxFrameUSB from "../assets/boxframeUSB.jpg"
import boxFrameUSB2 from "../assets/boxframeUSB2.jpg"

const Components = () => {
  return (
    <div>
      <h2 className="text-4xl text-blue font-bold py-2 px-8">
        Components
      </h2>
      <ItemStructure
        title={"Bottom Bar"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={BottomBar}
        
      />
      <ItemStructure
        title={"Background"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={background}
        
      />
      <ItemStructure
        title={"Icons"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={icons}        
      />
      <ItemStructure
        title={"Box Frame Radio"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={boxFrameRadio}        
      />
      <ItemStructure
        title={"Box Frame Bluetooth"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={boxFrameBT}        
      />
      <ItemStructure
        title={"Box Frame USB"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={boxFrameUSB}        
      />
      <ItemStructure
        title={"Box Frame USB 2"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis, doloremque ratione autem mollitia neque error fugiat odio sit commodi. Velit est, at perspiciatis blanditiis sunt molestias ad similique ipsam."
        }
        image={boxFrameUSB2}        
      />
      
    </div>
  )
}

export default Components