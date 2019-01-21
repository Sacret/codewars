/**
 * Our counter prototype is broken. Can you spot, what's wrong here?
 */

function Counter() {
  let value = 0;
  
  return {
    increase: function() {
      value++;
    },
    
    getValue: function() {
      return value;
    },
    
   reset: function() {
      value = 0;
    },
  };
}
