/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('ceibo');
  }
};
