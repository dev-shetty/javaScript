"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getShorts() {
        return 8;
    }
}
// const dev = new TakePhoto("portrait", "normal") // cant create object for abstract classes
class GitHub extends TakePhoto {
    constructor(camerMode, filter, burst) {
        super(camerMode, filter);
        this.camerMode = camerMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const dev = new GitHub("portrait", "normal", 5);
dev.getShorts();
