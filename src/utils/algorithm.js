function greatestCommonPrimeDivisor(a, b){
    var gcpd = -1;
    for(var i = 2; i <= a; i ++){
        if(a%i === 0 && b%i === 0 && isPrime(i) === true){
            gcpd = i;
        }
    }
    return gcpd;

}

const findGreatestCommonDivisor = (a, b) => {
    let gcd = -1;
    for(let i = 2; i <= a; i ++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

function lcm(a, b) {
    return a * (b / greatestCommonPrimeDivisor(a, b));
}

function isPrime(n){
    if(n === 1) return true;
    if(n === 0) return false;
    for(var i = 2; i< n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

function maxFraction(numerators, denominators){
    var largestFrac = 0;
    var pos = -1;
    for(var i in numerators){
        for(var j in denominators){
            if(i === j){
                if(numerators[i]/denominators[j] > largestFrac){
                    largestFrac = numerators[i]/denominators[j];
                    pos = i;
                }
            }
        }
    }
    return pos;

    function powerOfThreeNotNine(m, n){
        var count = 0;
        for(var i = m; i <= n; i++){
            if(isPowerOfThree(i) === true && isPowerOfNine(i) === false){
                count++;
            }
        }
        
        return count;
    }
    
    function isPowerOfThree(x){
        while (x % 3 == 0) {
            x /= 3;
        }
        return x == 1;
    }
    
    function isPowerOfNine(y){
        while (y % 9 == 0) {
            y /= 9;
        }
        return y == 1;
    }

    function lineUp(s, t){
        var arr = s.split('');
        for(var i = 0; i < t; i++){
            for(var j = 0; j < arr.length; j++){
                if(arr[j] == 'B' && arr[j+1]=='G'){
                    arr[j] = 'G';
                    arr[j+1] = 'B';
                    j += 1;
                }
            }
        }
        return arr.join('');
    }

    //check if nam nhuan
    function run(year){
        if ((year%4==0&&year%100!=0&&year%400!=0)||(year%100==0&&year%400==0)){
        console.log(year + " is a leap year");
        }else{
        console.log(year + " is not a leap year");
        }
    }

    //print out even numbers from 1 to n
    function run(n){
        var output = "";
        var arr = [];
        var i = 1;
        while(i <= n) {
            if(i%2 == 0)
            {
            arr.push(i);
            output = arr.join(',');		
            }
            i++;
        }
        
        console.log(output);
    }

    //count occurence in arr
    function countOccurrences(arr) {
        // viết code ở đây.
        return arr.reduce(function(x1,x2){
          var check = x1[x2] + 1; //obj['a'] = 1;
          if(check){
            x1[x2] = check;
          }else{
            x1[x2] = 1;
          }
          return x1;
        }, {});
      }
      
    //find a number satisfied frequency k
    function kFrequency(a, k){
        var index = 1000;
        var result = -1;
        var obj1 = countOccurrences(a);
        var arr = [];
        console.log(obj1);
        for(var i in obj1){
            console.log(obj1[i]);
            if(obj1[i]==k){
                arr.push(i);
            }
        }
        console.log(arr);
        if(arr.length > 0){
            for(var num of arr)
            {
                if(a.indexOf(num) < index){
                    index = a.indexOf(num);          
                }
            
            }
            result = a[index];
        } 
        return result;
    }
    
    function countOccurrences(arr) {
            return arr.reduce(function(x1,x2){
              var check = x1[x2] + 1;
              if(check){
                x1[x2] = check;
              }else{
                x1[x2] = 1;
              }
              return x1;
            }, {});
    }
    
    console.log(kFrequency([1,1,1,3,2,3,2,4,4,4,1], 1));
    //find a number satisfied frequency k _ END

    //reverse string
    function run(str_input ) {
        var str = str_input.split("").reverse().join("");
        return str;
    }

    //replace characters in string
    function run(str) {
        for(i=0;i<str.length;i++){
        str = str.replace("a","4");
        str = str.replace("e","3");
        str = str.replace("i","1");
        str = str.replace("o","0");
        str = str.replace("s","5");
        }
        str = str.trim();
        console.log(str);
        
    }

    //find max, min 
    function run(a, b, c, d) {  //when has 4 input
        var arr = Object.values(arguments);
          var max = arr.reduce((x,y) => Math.max(x,y));
          var min = arr.reduce((x,y) => Math.min(x,y));
          console.log(max+" "+min);
      }
    
      function run(...rest) { //when unknown number of input
        var arr = Object.values(arguments);
          var max = arr.reduce((x,y) => Math.max(x,y));
          var min = arr.reduce((x,y) => Math.min(x,y));
          console.log(max+" "+min);
      }

      //doi 2 so cuoi 1 so  ex:12345 -> 12354
    //   public static void main(String[] args) {
    //     Scanner scanner = new Scanner(System.in);
    //     int n = scanner.nextInt();

    //     n = (n/100)*100 + (n % 10)*10 + ((n % 100)/10);

    //     System.out.println(n);
    // }


      //switch case example
    // switch(num)
    //     {
    //         case "0":
    //         case "1":
    //         case "2":
    //         case "3":
    //         case "4":
    //         case "5":
    //         case "6":
    //         case "7":
    //         case "8":
    //         case "9":
    //             System.out.println("You pressed "+ num);
    //             break;
    //         default:
    //             System.out.println("Not allowed!");
    //             break;
    //switch case example_END
    
      //tim trang arr tich cua 2 so lon nhat  vd: [13,4,5,-7,2,-6,-5] kq:65
    function maxMultiplication(a){
        a.sort((x,y) => x-y);
        var max = a[0] * a[1];
        if(max < a[a.length-1] * a[a.length-2]){
            max = a[a.length-1] * a[a.length-2];
        }
        return max;
    }
    
    //DAN có một người bạn rất thích chơi lego nên muốn ra một câu đố. DAN đang có vô số mảnh lego với chiều rộng là 1
    // và chiều dài là a và b. Hãy giúp người bạn của DAN tìm số mảnh lego ít nhất  mà có thể lắp được một hàng lego với 
    //chiều dài là n và chiều rộng là 1, nếu không có cách nào hãy trả về -1.
    //giai pt ax+by = n
    function lego(a,b,n){
        let arr = [];
        for (let i = 0; i * a <= n; i++) 
            { 
                // check if it is satisfying the equation 
                if ((n - (i * a)) % b === 0) 
                { 
                    arr.push(i +  (n - (i * a)) / b); 
                } 
            } 
        if(arr.length === 0)
        return -1;
    
        arr.sort((a,b) => {
            return a-b;
        });
        return arr[0];
    
    }
}


// In JavaScript, both Map and Set are built-in objects that allow you to work with collections of values. They have distinct use cases and characteristics:

// Map:
// Key-Value Pairs: A Map is a collection of key-value pairs where each key can be of any data type (including objects, functions, and primitive values) and each value can also be of any data type.

// Order of Elements: Unlike plain JavaScript objects, Map maintains the order of elements based on the order of insertion. This makes it useful for scenarios where the order of elements matters.

// Duplicate Keys: A Map allows keys to be duplicated, but each key maps to a unique value. This means that you can't have two identical keys with different values.

// Iterating Elements: You can easily iterate over the elements of a Map using methods like forEach, for...of, or by converting it to an array with the Array.from method.

// Example of creating and using a Map:


const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // Output: 'John'
console.log(myMap.has('age'));   // Output: true

myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Set:
// Collection of Unique Values: A Set is a collection of unique values. It can contain values of any data type and automatically removes duplicate values.

// Order of Elements: Similar to Map, Set also maintains the order of elements based on insertion order.

// No Key-Value Pairs: Unlike Map, Set doesn't store key-value pairs; it only stores unique values.

// Iterating Elements: You can iterate over the elements of a Set using methods like forEach, for...of, or by converting it to an array with the Array.from method.

// Example of creating and using a Set:

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate values are ignored

console.log(mySet.has(2)); // Output: true

mySet.forEach(value => {
    console.log(value);
});
// In summary, Map is used when you need to associate values with unique keys, while Set is used when you need to work with a collection of unique values without associated keys. Both are powerful tools for working with data in JavaScript.