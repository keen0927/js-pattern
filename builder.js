var galbaLegion = makeLegion('galba').setAdjutant(['otho', 'vindex', 'vitellius']).setArmy(8000).build();
var rufusLegion = makeLegion('rufus').setArmy(10000).build();

var makeLegion = function(leader) {
    var adjutants = null;
    var army = 0;
    return {
      setAdjutant: function(list) {
        adjutants = list;
        return this;
      },
      setArmy: function(number) {
        army = number;
        return this;
      },
      build: function() {
        return {
          leader: leader,
          adjutants: adjutants,
          army: army
        };
      }
    };
  };

