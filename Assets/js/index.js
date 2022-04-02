var repoList = document.querySelectorAll('.list-group')[0];
//var fetchButton = document.getElementById('fetch-button');
console.log(repoList);

function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.github.com/users/MonaMahmoud/starred';

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var row;
            var imgColumn;
            var img;
            var link;
            var descColumn;
            var listLink;

            console.log(data.length)
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]);
                row = document.createElement('div');
                row.classList.add('row');

                imgColumn = document.createElement('div');
                imgColumn.classList.add('col');

                img = document.createElement('img');
                console.log(data[i].description.split("("))[1];
                // img.src = (data[i].description.split("("))[1].replace(")", "");
                console.log(img.src);
                link = document.createElement('a');

                descColumn = document.createElement('div');
                descColumn.classList.add('col');

                listLink = document.createElement('a');


                if (data[i].homepage == "") {
                    listLink.href = data[i].html_url;
                    link.href = data[i].html_url;
                } else {
                    listLink.href = data[i].homepage;
                    link.href = data[i].homepage;
                }
                link.appendChild(img);
                console.log(data[i].html_url);
                console.log(data[i].homepage);
                listLink.textContent = data[i].name;
                listLink.classList.add("list-group-item");
                listLink.classList.add("list-group-item-action");
                listLink.classList.add("text-capitalize");
                listLink.classList.add("bg-dark");
                listLink.classList.add("text-info");
                listLink.classList.add("p-4");
                listLink.target = "_blank";


                var listDesc = document.createElement('p');
                //listLink.href = data[i].html_url;
                listDesc.textContent = data[i].description;
                listDesc.classList.add("list-group-item");
                listDesc.classList.add("list-group-item-action");
                listDesc.classList.add("text-capitalize");
                listDesc.classList.add("bg-dark");
                listDesc.classList.add("text-white");
                listDesc.classList.add("p-4");




                repoList.appendChild(listLink);
                row.appendChild(imgColumn);
                row.appendChild(descColumn);
                repoList.appendChild(row);
            }
        });
}
getApi();
//fetchButton.addEventListener('click', getApi);