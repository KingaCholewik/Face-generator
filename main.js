const getFace = async (e) => {
  e.preventDefault();
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const ethnicity = document.getElementById('ethnicity').value;
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '468f74d5fcmsh53e391776dc23cap1cc12ejsncf274cb26cc5',
      'X-RapidAPI-Host': 'face-studio.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageDOM = document.createElement('img');
    const parDOM = document.createElement('p');
    const divFace = document.createElement('div');
    const searchTermGender = document.createElement('h2');
    const searchTermEthnicity = document.createElement('h2');
    const searchTermAge = document.createElement('h2');
    searchTermGender.textContent = `Płeć: ${
      gender == 'female' ? 'Kobieta' : 'Mężczyzna'
    }`;

    searchTermEthnicity.textContent = `Rasa: ${
      ethnicity == 'european'
        ? 'Europejczyk'
        : ethnicity == 'african'
        ? 'Afrykańczyk'
        : ethnicity == 'east_asian'
        ? 'Azjata'
        : 'Latyno-amerykańczyk'
    }`;
    searchTermAge.textContent = `Wiek: ${
      age == '10s'
        ? '10-19'
        : age == '20s'
        ? '20-29'
        : age == '30s'
        ? '30-39'
        : age == '40s'
        ? '40-49'
        : age == '50s'
        ? '50-59'
        : '60-69'
    }`;
    parDOM.textContent = `URL: ${url}`;
    parDOM.className = 'adres';
    imageDOM.src = image;
    imageDOM.className = 'image';

    divFace.appendChild(searchTermGender);
    divFace.appendChild(searchTermEthnicity);
    divFace.appendChild(searchTermAge);
    divFace.appendChild(imageDOM);
    divFace.appendChild(parDOM);
    document.querySelector('.faces').appendChild(divFace);
    // document.querySelector('.faces').appendChild(imageDOM);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
const clearFaces = () => {
  console.log(document.querySelector('.faces'));
  document.querySelector('.faces').innerHTML = '';
};
document.querySelector('#form').addEventListener('submit', getFace);
document.querySelector('.clear').addEventListener('click', clearFaces);
