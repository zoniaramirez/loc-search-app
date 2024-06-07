const searchForm = document.querySelector('#search-form');
const qInput = document.querySelector('#q');

fetch('https://www.loc.gov/search/?q=baseball&fo=json')
.then(function (response) {
    return response.json();
})
    .then(function (data) {
        console.log('SEARCH')
        console.log(data);S
    })
    .catch(function (err) {
        console.log(err);
    });

fetch('https://www.loc.gov/film-and-videos/?q=dog&fo=json')
.then(function (response) {
    return response.json();
})
    .then(function (data) {
        console.log('FORM')
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const q = qInput.ariaValueText.trim();

        fetch('https://www.loc.gov/search/?q=' + q + '&fo=json')
.then(function (response) {
    return response.json();
})
    .then(function (data) {
        console.log('SEARCH')
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });S


    })