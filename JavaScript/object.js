let item = {
    name:'laptop',
    price:33000,
    quantity:1,
    categories:['electronics','laptop'],
    dimensions:{
      length:7,
      breadth:3.5,
      height:.12
    }
  }
// item.check ="verified" //adding property to object
// delete item.price; // deleting the existing property from object
// console.log('first',item);
// item.check ="UnVerified" //updating the property value in object
// console.log('after updating',item);
// console.log(item.price);// trying to log not existing property
// console.log(item.quantity);
// console.log(item.dimensions.breadth);

//shallow copy
  //1.object.assign
  //2.spread operator
  //3. array.slice() or array.from

  // const assign = Object.assign({}, item);
  // console.log('assign',assign);
  // assign.dimensions.breadth = 72;
  // assign.quantity = 72


  console.log('item',item);
  // console.log('assign',assign);

   const spread = { ...item }
     spread.quantity = 88
     spread.dimensions.breadth = 22
  console.log('spread quantity',spread.quantity);
   console.log('item quantity',item.quantity);

     console.log('spread dimensions.breadth',spread.dimensions.breadth);
   console.log('item dimensions.breadth',item.dimensions.breadth);

