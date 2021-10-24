"use strict";

const storeContainer = document.getElementById('cookieStores');
let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m','Daily Location Total'];
let storeArray = [];

const cookieTable = document.querySelector('thead');
const cookieTableBody = document.querySelector('tbody');
const cookieFooter = document.querySelector('tfoot');
const cookieForm = document.getElementById('cookieForm');



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
  storeArray.push(this);
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


function handleSubmit(event) {
  event.preventDefault();
  let storeName = event.target.storeName.value;
  let min = event.target.min.value;
  let max = event.target.max.value;
  let customerAverage = event.target.customerAverage.value;
  let newStore = new CookieStore(storeName, min, max, customerAverage);
  newStore.renderTheList();
  let cookieTableRemove = document.getElementsByTagName('tfoot')[0];
  let cookieTableRow = document.getElementById('newTotal');
  console.log(cookieTableRemove);
  cookieTableRemove.removeChild(cookieTableRow);
  
  footer();
  //delete total current row
  // re-render totals row
  // give it an id so that it's easier to grab

}

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

seattle.renderTheList();
tokyo.renderTheList();
dubai.renderTheList();
paris.renderTheList();
lima.renderTheList();

function footer() {
  // this.dailyTotal += this.getCookieSalesPerHour();
  // this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());

  let storeTotal = [];

  let tr = document.createElement('tr');
  tr.setAttribute('id','newTotal');
  cookieFooter.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = 'Total' 
  tr.appendChild(td);
  let totalOfTotal = 0;
  
  for (let i = 0; i < hours.length -1; i++) {
  let hourlyTotal = 0;
    
 for (let j = 0; j < storeArray.length; j++) {

  hourlyTotal += storeArray[j].cookiesSoldEachHourArray[i];
 }
 totalOfTotal += hourlyTotal;
  let tdHourlyTotal = document.createElement('td');
  storeTotal.push(hourlyTotal);
  tdHourlyTotal.textContent = hourlyTotal;
  tr.appendChild(tdHourlyTotal);
}
  // loop through storetotal array 
  // sum up all of the contents 
  // append that sum to the end of the row
  let tdTotalOfTotal = document.createElement('td');
  tdTotalOfTotal.textContent = totalOfTotal; 
  tr.appendChild(tdTotalOfTotal);
};



footer();

cookieForm.addEventListener('submit',handleSubmit);












