/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-mirage' }
      ],
      blueprintOptions: {
        saveDev: true
      }
    });
  }
};
