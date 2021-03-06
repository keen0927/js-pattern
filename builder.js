var Legion = (function() {
    function Legion(leader, adjutants, number) {
      this.leader = leader;
      this.adjutants = adjutants || null;
      this.number = number || 0;
    }
    Legion.prototype.attack = function(target) {
      console.log(this.leader + '가 ' + target.leader + '를 공격합니다');
    };
    return Legion;
})();

var makeLegion = function(leader) {
    var adjutants = null;
    var army = null;
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
        return new Legion(leader, adjutants, army);
      }
    }
  };

var galbaLegion = makeLegion('galba').setAdjutant(['otho', 'vindex', 'vitellius']).setArmy(8000).build();
var rufusLegion = makeLegion('rufus').setArmy(10000).build();

console.log(galbaLegion);