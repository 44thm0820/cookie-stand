"use strict";

const storeContainer = document.getElementById('cookieStores');
let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m','Daily Location Total'];
let storeArray = [];

const cookieTable = document.querySelector('thead');
const cookieTableBody = document.querySelector('tbody');
const cookieFooter = document.querySelector('tfoot');



function CookieStore(storeName, min, max, avg) {

	this.storeName = storeName;
	this.min = min;
	this.max = max;
	this.avg = avg;
	this.cookiesSoldEachHourArray = [];
  this.dailyTotal = 0;

	this.getRandomCustomers = function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	};
	this.getCookieSalesPerHour = function() {
           
      for (let i = 0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers();  
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
      }
  };
    this.renderTheList = function () {
      this.getCookieSalesPerHour();
        let cookieNumbers = 0;

        let tr = document.createElement('tr');
        cookieTableBody.appendChild(tr)
        let td = document.createElement('td');
        td.textContent = this.storeName;
        tr.appendChild(td)
      for (let i = 0; i < hours.length -1; i++) {
        let tdEachHour = document.createElement('td');
         cookieNumbers = this.cookiesSoldEachHourArray[i];
         tdEachHour.textContent = cookieNumbers
         this.dailyTotal += cookieNumbers
        tr.appendChild(tdEachHour);
      }
        let tdDailyTotal = document.createElement('td');
        tdDailyTotal.textContent = this.dailyTotal
        tr.appendChild(tdDailyTotal);
      
      };

  // this.render = function (){
  //   this.getCookieSalesPerHour();


   
  // };
  // storeArray.push(this);
}

function header() {
  // this.dailyTotal += this.getCookieSalesPerHour();
  // this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
  let thHours = document.createElement('th');
  thHours.textContent = hours[i];
  tr.appendChild(thHours);
};
}

header();

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 23, 65, 6.3);
let dubai = new CookieStore('Dubai', 23, 65, 6.3);
let paris = new CookieStore('Paris', 23, 65, 6.3);
let lima = new CookieStore('Lima', 23, 65, 6.3);

seattle.renderTheList();
tokyo.renderTheList();
dubai.renderTheList();
paris.renderTheList();
lima.renderTheList();


function footer() {
  // this.dailyTotal += this.getCookieSalesPerHour();
  // this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
  let tr = document.createElement('tr');
  cookieFooter.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = 'Total'
  tr.appendChild(td);
  
  let totalOfTotal = 0;
  for (let i = 0; i < hours.length -1; i++) {
  
  let tdHourlyTotal = document.createElement('td');
  let hourlyTotal = 0;
  console.log(seattle.cookiesSoldEachHourArray);
   hourlyTotal = seattle.cookiesSoldEachHourArray[i] + tokyo.cookiesSoldEachHourArray[i] + dubai.cookiesSoldEachHourArray[i] + paris.cookiesSoldEachHourArray[i] + lima.cookiesSoldEachHourArray[i];
  totalOfTotal += hourlyTotal;
  tdHourlyTotal.textContent = hourlyTotal
  // console.log(tdHourlyTotal);
  tr.appendChild(tdHourlyTotal);
};
  let tdTotalOfTotal = document.createElement('td');
  tdTotalOfTotal.textContent = totalOfTotal;
  tr.appendChild(tdTotalOfTotal)
}

footer();












