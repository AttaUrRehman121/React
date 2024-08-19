const Error = ({ items }) => {
  let fooditem = ["Daal", "Green Vegitable", "Roti", "Salad", "Milk", "Ghee"];
  //let fooditem = [];
  return <>{items.length === 0 ? <h3> I am Still Hungry</h3> : null}</>;
};

export default Error;
