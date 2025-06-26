for(var i=1;i<=10;i++){

    if(i==5)
      break;
   else
     console.log('i:', i );
 }
    console.log("Break at 5 : Console from end of loop");

 for(var j=1;j<=10;j++){

    if(j==5)
      continue;
   else
     console.log('j:', j);
 }

let users = [
    { name: 'Anto', gender: 'm' },
    { name: 'Franklin', gender: 'm' },
    { name: 'Sam', gender: 'm' },
    { name: 'Jasmine', gender: 'f' },
    { name: 'Jia', gender: 'f' },
  ]
  
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    console.log(element)
  }

  let k=0;
  while(k<3){
    console.log('before increment',k);
    k++ +1;
    console.log('after increment:', k);
  }
  