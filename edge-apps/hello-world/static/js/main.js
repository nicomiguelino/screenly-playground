const main = () => {
    const containerElement = document.querySelector('.container');
    const nameElement = document.querySelector('#main-name');
    const screenNameElement = document.querySelector('#screen-name');

    const { metadata, settings } = screenly;

    nameElement.innerHTML = 'stranger';
    screenNameElement.innerHTML = 'someone';
}

window.onload = () => {
    main();
};
