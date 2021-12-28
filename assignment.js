
// **Q1. Write a program that prints even numbers from 1 to 100 in descending order the output should show: 100 98 96 . . . 2
// Ans:
for(var i=100; i>=2; i=i-2)
{
    console.log(i)
}

// Q2: Write a function which accepts list of country names as parameter and returns the longest country name as output.
// Ans:
function Cntry_Long(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, "");
}
console.log(Cntry_Long(["India", "France", "United States of America"]));

// Q3: Write a function which accept a number and reverse a number as output. For Example n = 83343; Output : 34338
// Ans:
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(83343)));

// Q4: Write a function to accept a number as parameter and return false or true based on weather the number is prime or not. A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Ans:
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }
  else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(3));  // Prime Number
console.log(test_prime(4)); // Non Prime Number


