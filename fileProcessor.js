const EventEmitter = require('events');

class FileProcessor extends EventEmitter {
    process() {
        this.emit('start');

        this.emit('progress', 25);
        this.emit('progress', 50);
        this.emit('progress', 75);
        this.emit('progress', 100);

        if (Math.random() < 0.2) {
            this.emit('error', new Error('File processing failed'));
            return;
        }

        this.emit('complete');
    }
}

const fileProcessor = new FileProcessor();

fileProcessor.on('start', () => {
    console.log('File processing started');
});

fileProcessor.on('progress', (percent) => {
    console.log(`Progress: ${percent}%`);
});

fileProcessor.on('complete', () => {
    console.log('File processing completed');
});

fileProcessor.on('error', (error) => {
    console.log('Error:', error.message);
});

fileProcessor.process();