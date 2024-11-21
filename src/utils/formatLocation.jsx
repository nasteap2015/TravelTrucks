const formatLocation = (location) => {
    const formatedLocation = String(location.split(", ").reverse().join(", "));
    return formatedLocation;
};

export default formatLocation;