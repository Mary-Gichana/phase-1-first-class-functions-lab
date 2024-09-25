// Code your solution in this file!
    
    const returnFirstTwoDrivers= function (scuberDrivers){
        return scuberDrivers.slice(0, 2);
    }
    

    const returnLastTwoDrivers = function (scuberDrivers){
        return scuberDrivers.slice(-2);
    }
    



 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


 const createFareMultiplier = function(multiplier){
    return function(fare) {
        return fare * multiplier;
    };

    

 }
 
 const selectDifferentDrivers = function(scuberDrivers, func) {
    return func(scuberDrivers); 
};



 
        
 const fareQuadrupler = createFareMultiplier(2);
 const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);
 

 returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
 returnLastTwoDrivers()(['Antonia', 'Nuru', 'Amari', 'Mo']);
 
console.log(selectingDrivers[0](scuberDrivers));
console.log(selectingDrivers[1](scuberDrivers));

console.log(fareQuadrupler(5));
console.log(fareDoubler(10));
console.log(selectingDrivers(scuberDriversdrivers, returnFirstTwoDrivers));
