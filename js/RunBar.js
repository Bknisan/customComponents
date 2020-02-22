window.addEventListener("DOMContentLoaded",function () {
    let progress = document.querySelector('progress-bar'),
        complete = 0;

    const progressInterval = setInterval(() => {
        complete += 1;

        if (complete <= 100) {
            progress.setAttribute('complete', complete);
        } else {
            clearInterval(progressInterval);
        }
    }, 100);
});
