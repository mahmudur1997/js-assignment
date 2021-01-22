

// problem:1

function kilometerToMeter(km) {
    if (km < 0) {
        return 'Input cannot  be a negetive number';
    }
    else {
        var meter = (km * 1000);
        return meter;
    }
}
   
  //function calling and output check section
// var result = kilometerToMeter(16);
// console.log(result);

// problem:2

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'Input cannot  be a negetive number';
    }
    else {
        var watchCost = watch * 50;                   //The cost of every watch is 50 taka
        var phoneCost = phone * 100;                  //The cost of every phone is 100 taka
        var laptopCost = laptop * 500;                //The cost of every laptop is 500 taka
        var totalCost = watchCost + phoneCost + laptopCost;
        return totalCost;
    }
}  


   //function calling and output check section
// var budget = budgetCalculator(5, 7, 3);
// console.log(budget);



// problem:3

function hotelCost(day) {
    var totalHotelCost = 0;
    if (day < 0) {
        return 'Input cannot negetive number';
    }
    else if (day <= 10) {
        totalHotelCost = day * 100;   //In 1st 10 days  per day cost is 100 taka
        return totalHotelCost;
    }
    else if (day <= 20) {
        var firstTendayCost = 10 * 100;
        var remaining = day - 10;
        var secondPartCost = remaining * 80;                //In 2nd 10 days per day cost is 80 taka
        totalHotelCost = firstTendayCost + secondPartCost;
        return totalHotelCost;
    }
    else {
        var firstTendayCost = 10 * 100;
        var secondTendayCost = 10 * 80;
        var remaining = day - 20; 
        var thirdPartCost = remaining * 50;               //After 20 days  per day cost is 50 taka
        totalHotelCost = firstTendayCost + secondTendayCost + thirdPartCost;
        return totalHotelCost;
    }
}
   //function calling and output check section
// var totalAmount = hotelCost(21);
// console.log(totalAmount);


// problem:4

function megaFriend(friend) {
    if (Array.isArray(friend) == true) {
        if (friend.length <= 0) {
            return " Input your friend name";
        }
        else {
            var maxName = "";
            for (var i = 0; i < friend.length; i++) {
                if (maxName.length < friend[i].length) {
                    maxName = friend[i];
                }
            }
            return maxName;
        }
    }
    else {
        return " Input your friend name in an array";
    }

}
   //function calling and output check section
// var friend = ["Sohana", "Atik", "Hasib", "Mahfuj"];
// var largeName = megaFriend(friend);
// console.log(largeName);

