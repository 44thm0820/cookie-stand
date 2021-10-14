"use strict";

const seattleStore = document.getElementById('seattleList'); 
let hours = ['6 a.m', '7 a.m.', '8 a.m.', '9a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m'];
let seattle = {

	name: 'Seattle',
	min: 23,
	max: 65,
	avg: 6.3,
	cookiesSoldEachHourArray: [],
	// a number between min and max that times by the average, maybe a method?
	getRandomCustomers: function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	},
	getCookieSalesPerHour: function() {
    //calculate the cookies sold for all 14 hours


    //get the number of customers this hour
  

  
  
  //that value of total cookies sold that hour onto our array
    // how to get the value of the total cookies sold this hour?
    // write a for loop that uses the length of the hours array in that loop

    for (let i =0; i < hours.length; i++) {
    let customersThisHour = this.getRandomCustomers(); 
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    // this.totalCookiesSoldThisHour;
    this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    
    }
    console.log(this.cookiesSoldEachHourArray);
	},
  renderTheList: function (){
    this.getCookieSalesPerHour();
    //code that will render the lists to the page
    //render the lis inside our ul
  }
}
seattle.renderTheList();

