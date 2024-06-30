document.addEventListener("DOMContentLoaded", function () {
    const moods = {
        joy: 200,
        anger: 130,
        sadness: 50,
        disgust: 180,
        fear: 120,
        anxiety: 90,
        envy: 100,
        embarrassment: 5,
        ennui: 30
    };

    for (const [mood, width] of Object.entries(moods)) {
        document.getElementById(`${mood}-bar`).style.width = `${width}px`;
    }
});
