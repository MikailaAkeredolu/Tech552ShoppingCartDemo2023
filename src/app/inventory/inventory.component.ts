import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


 num:number = Math.floor(Math.random() * 6) + 1;


 randomMessage(){
 switch (this.num) {
  case 0:
    return "50c Soda - Monday";
    case 1:
      return "$1 Fries - Tuesday";

      case 2:
        return "$2 Battery - Wednesday";

        case 3:
          return "B.O.G.O - Thursday";

          case 4:
            return "$4 burger - Friday";

            case 5: case 6:
              return "Closed on weekends";

                default:
                return "no such day exist"

 };

 }


  constructor() { }

  ngOnInit(): void {
  this.randomMessage();
  }


  inventory:Item[] = [
    {
      "id":1,
      "name":"Burger",
      "brand":"McDonalds",
      "inStock":5,
      "price":4.00,
      "image": 'https://i.pinimg.com/originals/47/2d/c3/472dc3346c5d2746cac2db4d95cc1e22.png',
      "featured":false,
      "recyclable": false,
      "qty": 0,
      "rating": "*"
      },

      {
        "id":2,
        "name":"Soda",
        "brand":"CocaCola",
        "inStock":15,
        "price": 0.50,
        "image": 'https://icon-library.com/images/soda-icon/soda-icon-10.jpg',
        "featured":true,
        "recyclable": false,
        "qty": 0,
        "rating": "**"
      },

     {
      "id":3,
      "name":"Fries",
      "brand":"Burger King",
      "inStock":10,
      "price":1.0,
      "image": 'https://freesvg.org/img/1515018115.png',
      "featured":true,
      "recyclable": false,
      "qty": 0,
      "rating": "***"
    },

    {
      "id":4,
      "name":"Battery",
      "brand":"AA",
      "inStock":3,
      "price": 2.0,
      "image": 'https://cdn.pixabay.com/photo/2018/02/07/16/18/battery-3137394_1280.png',
      "featured":true,
      "recyclable": true,
      "qty": 0,
      "rating": "****"
    }


    //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8A0N4G6b1Z5m2_aa-battery-icon-aa-battery%2F&psig=AOvVaw2Vd8nKDwuB4RcsPUYl85Q0&ust=1673287674047000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCIDy3LzIuPwCFQAAAAAdAAAAABAH

    ];


qtyCount(){
    let sum = 0;


    for(let x = 0; x < this.inventory.length; x++){

        sum += this.inventory[x].qty;
    }
  return sum;
};

stockCount(inventory:any){
  for(let x = 0; x < this.inventory.length; x++){
    if((inventory.id === this.inventory[x].id)){
      return this.inventory[x].inStock;
  }
}
return 0;
};


//if qty is less than qty in stock then add to cart
increaseQty(inventory: any){
  if(inventory.qty < inventory.inStock){
      inventory.qty++;
  }

};

//Only remove if current qty is NOT zero
decreaseQty(inventory: any){
  if(inventory.qty != 0 && inventory.qty > 0 ){
    inventory.qty--;
}
}

totalPrice(){
  let sum = 0;
  for (const item of this.inventory) {
    if(item.qty <= item.inStock){
      sum += item.price * item.qty;
  }

  }
  return sum;
}

//ten percent tax
calculateTax(){
  return this.totalPrice() * 0.10;
}

calculateTotalAfterTax(){
  return this.totalPrice() + this.calculateTax();
}






}
