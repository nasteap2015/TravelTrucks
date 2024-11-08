const getEquipmentList = (truck) => {
    const equipmentList = [];
    const { AC,
        bathroom,
        kitchen,
        TV,
        radio,
        refrigerator,
        microwave,
        gas,
        water } = truck;
    
    if (AC) {
        equipmentList.push("AC")
    };
    if (bathroom) {
        equipmentList.push("bathroom")
    };
    if (kitchen) {
        equipmentList.push("kitchen")
    };
    if (TV) {
        equipmentList.push("TV")
    };
    if (radio) {
        equipmentList.push("radio")
    };
    if (refrigerator) {
        equipmentList.push("refrigerator")
    };
    if (microwave) {
        equipmentList.push("microwave")
    };
    if (gas) {
        equipmentList.push("gas")
    };
    if (water) {
        equipmentList.push("water")
    };

    return equipmentList;
}

export default getEquipmentList;