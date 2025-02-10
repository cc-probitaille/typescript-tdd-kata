export default function fizzbuzz (input: number): string {
    //Check si l'entree est divisible par 3 et 5
    if(input%5 == 0 && input%3 == 0){
        return "FizzBuzz";
    }else if(input%5==0){
        return "Buzz";
    }else if(input%3==0){
        return "Fizz";
    }else{
        return ""+input;
    }
}