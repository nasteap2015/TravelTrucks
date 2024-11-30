import { GiGasStove } from "react-icons/gi";
import { BsUiRadios } from "react-icons/bs";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import { PiShower } from "react-icons/pi";
import { FiTv } from "react-icons/fi";
import { LuMicrowave, LuRefrigerator } from "react-icons/lu";
import { BsCupHot } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";

function getIcon(equipmentItem) {
        switch (equipmentItem) {
            case 'gas':
                return <GiGasStove size = '20px'/>;
            case 'water':
                return <IoWaterOutline size = '20px'/>;
            case 'AC':
                return <FaWind size = '20px'/>;
            case 'bathroom':
                return <PiShower size = '20px'/>;
            case 'kitchen':
                return <BsCupHot size = '20px'/>;
            case 'TV':
                return <FiTv size = '20px'/>;
            case 'radio':
                return <BsUiRadios size = '20px'/>;
            case 'refrigerator':
                return <LuRefrigerator size = '20px'/>;
            case 'microwave':
                return <LuMicrowave size = '20px'/>;
            case 'engine':
                return <MdOutlineLocalGasStation size = '20px'/>;
        }
}
    
export default getIcon;