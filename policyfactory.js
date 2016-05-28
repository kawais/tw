function PolicyFactory() {

}

PolicyFactory.prototype.getPolicy = function(name) {
    try {
        var policy = require('./policy/' + name + '.js');
        return new policy();
    } catch (e) {
        throw new Error('Policy not found.');
    }
}


module.exports = PolicyFactory;
