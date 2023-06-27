var assert = require('assert');

const factorial = require('./multiply')



describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return 1 when the value is multiplied',  function(){

         let  multiply= (a,b)=>{
            return(a*b)
           
         }
         assert.equal(multiply(1,1), 1)
      });
    });
  });

  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return 4 when the value is multiplied',  function(){

         let  multiply= (a,b)=>{
            return(a*b)
           
         }
         assert.equal(multiply(2, 2),4)
      });
    });
  });


  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return 4 when the value is multiplied',  function(){

         let  multiply= (a,b)=>{
            return(a*b)
           
         }
         assert.equal(multiply(3, 3), 9)
      });
    });
  });


  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return 4 when the value is multiplied',  function(){

         let  multiply= (a,b)=>{
            return(a*b)
           
         }
         assert.equal(multiply(4, 4), 16)
      });
    });
  });

  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return 4 when the value is multiplied',  function(){

         let  multiply= (a,b)=>{
            return(a*b) 
         }
         assert.equal(multiply(23, 45), 23 * 45)
      });
    });
  });




  
   describe('#indexOf()', function () {
     it('factorial implement',  function(){
        assert.equal(factorial(6),720)
     });
   });
 



 
  