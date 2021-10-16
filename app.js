"use strict";

const seattleContainer = document.getElementById('seattleList');
const tokyoContainer = document.getElementById('tokyoList'); 
const dubaiContainer = document.getElementById('dubaiList'); 
const parisContainer = document.getElementById('parisList'); 
const limaContainer = document.getElementById('limaList'); 

let hours = ['6 a.m', '7 a.m', '8 a.m', '9a.m.','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m'];

let seattle = {

	name: 'Seattle',
	min: 23,
	max: 65,
	avg: 6.3,
	cookiesSoldEachHourArray: [],
  dailyTotal: 0,
	getRandomCustomers: function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	},
	getCookieSalesPerHour: function() {
    for (let i =0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers(); 
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);

    
	},
  renderTheList: function (){
    this.getCookieSalesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      this.dailyTotal += this.cookiesSoldEachHourArray[i];
      seattleContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`
    seattleContainer.appendChild(li);
  }
}




let tokyo = {

	name: 'Tokyo',
	min: 23,
	max: 65,
	avg: 6.3,
	cookiesSoldEachHourArray: [],
  dailyTotal: 0,
	getRandomCustomers: function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	},
	getCookieSalesPerHour: function() {
    for (let i =0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers(); 
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);

    
	},
  renderTheList: function (){
    this.getCookieSalesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      this.dailyTotal += this.cookiesSoldEachHourArray[i];
      tokyoContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`
    tokyoContainer.appendChild(li);
  }
}
let dubai = {

	name: 'dubai',
	min: 23,
	max: 65,
	avg: 6.3,
	cookiesSoldEachHourArray: [],
  dailyTotal: 0,
	getRandomCustomers: function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	},
	getCookieSalesPerHour: function() {
    for (let i =0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers(); 
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);

    
	},
  renderTheList: function (){
    this.getCookieSalesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      this.dailyTotal += this.cookiesSoldEachHourArray[i];
      dubaiContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`
    dubaiContainer.appendChild(li);
  }
}

let paris = {

	name: 'paris',
	min: 23,
	max: 65,
	avg: 6.3,
	cookiesSoldEachHourArray: [],
  dailyTotal: 0,
	getRandomCustomers: function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	},
	getCookieSalesPerHour: function() {
    for (let i =0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers(); 
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);

    
	},
  renderTheList: function (){
    this.getCookieSalesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      this.dailyTotal += this.cookiesSoldEachHourArray[i];
      parisContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`
    parisContainer.appendChild(li);
  }
}

let lima = {

	name: 'lima',
	min: 23,
	max: 65,
	avg: 6.3,
	cookiesSoldEachHourArray: [],
  dailyTotal: 0,
	getRandomCustomers: function() {
	
	return Math.floor(Math.random() * (this.max - this.min +1) + this.min);
	
	},
	getCookieSalesPerHour: function() {
    for (let i =0; i < hours.length; i++) {
      let customersThisHour = this.getRandomCustomers(); 
      let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
      this.cookiesSoldEachHourArray.push(totalCookiesSoldThisHour);
    }
    console.log(this.cookiesSoldEachHourArray);

    
	},
  renderTheList: function (){
    this.getCookieSalesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
      this.dailyTotal += this.cookiesSoldEachHourArray[i];
      limaContainer.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`
    limaContainer.appendChild(li);
  }
}
seattle.renderTheList();
tokyo.renderTheList();
dubai.renderTheList();
paris.renderTheList();
lima.renderTheList();
