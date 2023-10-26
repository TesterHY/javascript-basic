// 朝の挨拶を出力する関数
const sayGoodMorning = () => {
  console.log("Good Morning");
};

// 夜の挨拶を出力する関数
const sayGoodEvening = () => {
  console.log("Good Evening");
};

sayGoodMorning();
sayGoodEvening();

const calculateTotal = (price) => {
  console.log(price + 500 + "円");
};

calculateTotal(1200);

const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + "円");
};

addTwoArguments(1200, 500);

const double = (num) => {
  return num * 2;
};

console.log(double(30));
