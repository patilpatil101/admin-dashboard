1. Please explain deep copy, Shallow Copy and Object Mutation?
Answer:
    Deep Copy: Deep Copy will share different memory address ( Same Changes will not happens in both objects )
    e.g: (...) spread operator

    Shallow Copy: Shallow Copy will share same memory address ( Same Changes happens in both objects )
    e.g: Object.assign(targetObj, sourceObj);

    Object Mutation: Objects are mutable in JavaScript and objects are reference typed data. so, they contains the reference to the value. but the variables don’t actually contain the value
/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/
2. Explaing .call, .apply, .bind?
Answer: 

    .call => function borrowing and
        reusability of a function.
     (passing second argument as string)
    e.g

    function printFullName() {
        console.log(this.firstname + " " + this.lastname);
    }
    let name = {
        firstname: 'Rohit',
        lastname: 'Patil'
    }
    let name2 = {
        firstname: 'Harshal',
        lastname: 'Patil'
    }
    printFullName.call(name);    // Rohit Patil
    printFullName.call(name2);   // Harshal Patil
            

    .apply =>
        (passing second argument as array of string)
    
    function printFullName(hometown, state) {
        console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
    }   
    let name = {
        firstname: 'Rohit',
        lastname: 'Patil'
    }
    let name2 = {
        firstname: 'Harshal',
        lastname: 'Patil'
    }
    printFullName.apply(name2, ['Malkapur', 'UP']);    // Harshal Patil from Malkapur, UP 


    .bind => 
        keep a copy of method and use it later. Need to call function for .bind()

    var add = function (x, y) {
    return x + y;
    }
    var add2 = add.bind(null, 2);         // 2 is stored 
    console.log(add2(2));         //4
/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

3. What is event bubbling in Javascript?
Answer:

    capture and handle events propagated inside the DOM and it starts from bottom to top.

    div 1 will have click event and div2 is inside div1 and div2 will also have click event then when you click on div2 div1 will also gets called which we don't want so to avoid this we use 
    
    stopPropogation() to avoid this.

/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/


4. Please refer shared pdf for question no 4.

Answer: 

    success
    error
    Error caught
/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/

5. Sum of two number sum(x)(y);

const sum = (x) =>{
  return (y) =>{
    return x + y;
  }
}
console.log(sum(10)(20))

/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/


