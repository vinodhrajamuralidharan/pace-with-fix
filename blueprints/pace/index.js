module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return addBowerPackageToProject('vectart/pace', 'master');
  }
};
