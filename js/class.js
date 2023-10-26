// Class定義
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe() {
    console.log("この商品名は" + this.name + "です");
  }
}

// インスタンス化する
const shampoo = new Product("Shampoo", 1000, "生活雑貨");
const coffee = new Product("Coffee", 200, "飲料");

console.log(shampoo);
console.log(coffee);

shampoo.describe();
coffee.describe();

const user = {
  name: "Sara",
  age: 15,
  gender: "Woman",
  greet: () => {
    console.log("よろしくお願いします！");
  },
};

user.greet();
