let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() {
        document.getElementById('object_task3').innerHTML = `You're on step ${this.step}`;
    }
};
