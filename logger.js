const EventEmitter = require ('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Create an event named 'message'
        this.once('uuid', (msg) => {
            console.log(uuid.v4(), msg);
        });
        // emit event based on name passed as parameter
        this.emitEvent(msg);
    }

    append(msg) {
        this.once('uuid', (msg) => {
           console.log('Appended:', msg);
        });
        this.emitEvent(msg);
    }

    emitEvent(msg) {
        this.emit('uuid', msg);
    }
}

module.exports = Logger;