'use strict';

// Extended Worker class
const Worker = require('./Worker');

class ConsoleWorker extends Worker {
    constructor(scenario) {
        super(scenario);
    }
    setup(done) {
        super.setup(done);
    }
    run(done) {
        super.run(done);
    }
    teardown(done) {
        super.teardown(done);
    }
}

module.exports = ConsoleWorker;
