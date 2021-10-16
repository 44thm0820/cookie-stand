"use strict";

const storeContainer = document.getElementById('cookieStores');
let hours = ['6 a.m', '7 a.m', '8 a.m', '9a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m'];
let storeArray = [];

const cookieTableBody = document.querySelector('table');

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
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour)
      }
  };
    this.renderTheList = function () {
      this.getCookieSalesPerHour();
        let tr = document.createElement('tr');
        cookieTableBody.appendChild(tr)
      for (let i = 0; i < hours.length; i++) {
        let tdEachHour = document.createElement('td');
        tdEachHour.textContent = this.cookiesSoldEachHourArray[i];
        tr.appendChild(tdEachHour);
      }
      
      };
    console.log(this.getCookieSalesPerHour);

  this.render = function (){
    this.getCookieSalesPerHour();


   
  };
  storeArray.push(this);
}

function header() {
  // this.dailyTotal += this.getCookieSalesPerHour();
  // this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
  let th = document.createElement('th');
  cookieTableBody.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
  let tdHours = document.createElement('td');
  tdHours.textContent = hours[i];
  th.appendChild(tdHours);
};
}

header();



let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 23, 65, 6.3);
let dubai = new CookieStore('Dubai', 23, 65, 6.3);
let paris = new CookieStore('Paris', 23, 65, 6.3);
let lima = new CookieStore('Lima', 23, 65, 6.3);

// for (let i = 0; i < storeArray.length; i++) {
//   // storeArray[i].render();
//   storeArray[i].renderTableHead();
// }

seattle.renderTheList();
tokyo.renderTheList();
dubai.renderTheList();
paris.renderTheList();
lima.renderTheList();






// let seattle = {

// 	name: 'Seattle',
// 	min: 23,
// 	max: 65,
// 	avg: 6.3,
// 	cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
// 	getRandomCustomers: function() {
	
// 	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
// 	},
// 	getCookieSalesPerHour: function() {
//     for (let i =0; i < hours.length; i++) {
//       let customersThisHour = this.getRandomCustomers(); 
//       let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
//       this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
//     }
//     console.log(this.cookiesSoldEachHourArray);

    
// 	},
//   renderTheList: function (){
//     this.getCookieSalesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       this.dailyTotal += this.cookiesSoldEachHourArray[i];
//       seattleContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`
//     seattleContainer.appendChild(li);
//   }
// }




// let tokyo = {

// 	name: 'Tokyo',
// 	min: 23,
// 	max: 65,
// 	avg: 6.3,
// 	cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
// 	getRandomCustomers: function() {
	
// 	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
// 	},
// 	getCookieSalesPerHour: function() {
//     for (let i =0; i < hours.length; i++) {
//       let customersThisHour = this.getRandomCustomers(); 
//       let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
//       this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
//     }
//     console.log(this.cookiesSoldEachHourArray);

    
// 	},
//   renderTheList: function (){
//     this.getCookieSalesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       this.dailyTotal += this.cookiesSoldEachHourArray[i];
//       tokyoContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`
//     tokyoContainer.appendChild(li);
//   }
// }
// let dubai = {

// 	name: 'dubai',
// 	min: 23,
// 	max: 65,
// 	avg: 6.3,
// 	cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
// 	getRandomCustomers: function() {
	
// 	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
// 	},
// 	getCookieSalesPerHour: function() {
//     for (let i =0; i < hours.length; i++) {
//       let customersThisHour = this.getRandomCustomers(); 
//       let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
//       this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
//     }
//     console.log(this.cookiesSoldEachHourArray);

    
// 	},
//   renderTheList: function (){
//     this.getCookieSalesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       this.dailyTotal += this.cookiesSoldEachHourArray[i];
//       dubaiContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`
//     dubaiContainer.appendChild(li);
//   }
// }

// let paris = {

// 	name: 'paris',
// 	min: 23,
// 	max: 65,
// 	avg: 6.3,
// 	cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
// 	getRandomCustomers: function() {
	
// 	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
// 	},
// 	getCookieSalesPerHour: function() {
//     for (let i =0; i < hours.length; i++) {
//       let customersThisHour = this.getRandomCustomers(); 
//       let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
//       this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
//     }
//     console.log(this.cookiesSoldEachHourArray);

    
// 	},
//   renderTheList: function (){
//     this.getCookieSalesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       this.dailyTotal += this.cookiesSoldEachHourArray[i];
//       parisContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`
//     parisContainer.appendChild(li);
//   }
// }

// let lima = {

// 	name: 'lima',
// 	min: 23,
// 	max: 65,
// 	avg: 6.3,
// 	cookiesSoldEachHourArray: [],
//   dailyTotal: 0,
// 	getRandomCustomers: function() {
	
// 	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
// 	},
// 	getCookieSalesPerHour: function() {
//     for (let i =0; i < hours.length; i++) {
//       let customersThisHour = this.getRandomCustomers(); 
//       let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
//       this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
//     }
//     console.log(this.cookiesSoldEachHourArray);

    
// 	},
//   renderTheList: function (){
//     this.getCookieSalesPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
//       this.dailyTotal += this.cookiesSoldEachHourArray[i];
//       limaContainer.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyTotal} cookies`
//     limaContainer.appendChild(li);
//   }
// }
// seattle.renderTheList();
// tokyo.renderTheList();
// dubai.renderTheList();
// paris.renderTheList();
// lima.renderTheList();
