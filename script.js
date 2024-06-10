const searchForm = document.querySelector('#search-form');
const qInput = document.querySelector('#q');
const formatInput = document.querySelector('#format');
const resultList = document.querySelector('#results');

  fetch('https://www.loc.gov/film-and-videos/?q=dog&fo=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('FORM');
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });

  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const q = qInput.value.trim();
    const format = formatInput.value;

    let type = 'search';

    if (format) {
      type = format;
    }

    fetch('https://www.loc.gov/' + type + '/?q=' + q + '&fo=json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let html = '';

        for (let result of data.results) {
          html += `<div class="col-12">
          <div class="card p-3 m-3">
            <h2>${result.title}</h2>
            <p>Date: ${result.date}</p>
            <p>Subject: ${result.description}</p>
            <a target="_blank" href="${result.url}" class="btn btn-primary" href="#">Read more</a>
          </div>
        </div>`;
        }

        resultList.innerHTML = html;

        // for (let result of data.results) {
        //   const columnEl = document.createElement('div');
        //   const cardEl = document.createElement('div');
        //   const h2El = document.createElement('h2');
        //   const dateEl = document.createElement('p');
        //   const descriptionEl = document.createElement('p');
        //   const aEl = document.createElement('a');

        //   columnEl.className = 'col-12';
        //   cardEl.className = 'card p-3 m-3';
        //   h2El.textContent = result.title;
        //   dateEl.textContent = 'Date: ' + result.date;
        //   descriptionEl.textContent = 'Subject: ' + result.description;
        //   aEl.href = result.url;
        //   aEl.target = '_blank';
        //   aEl.textContent = 'Read more';
        //   aEl.className = 'btn btn-primary';

        //   cardEl.append(h2El, dateEl, descriptionEl, aEl);

        //   columnEl.appendChild(cardEl);
        //   resultList.appendChild(columnEl);
        // }
      })
      .catch(function (err) {
        console.log(err);
      });
  });