var repoList = document.querySelectorAll('.list-group')[0];


function getApi() {

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
            row = document.getElementById('workRow');
            var newRow;

            for (var i = 0; i < data.length; i++) {

                newRow = document.createElement('div');
                newRow.classList.add('row');
                newRow.classList.add('gy-5');

                imgColumn = document.createElement('div');
                imgColumn.classList.add('col');

                img = document.createElement('img');
                img.classList.add('img-fluid');
                img.src = (data[i].description.split("("))[1].replace(")", "");
                console.log(img.src);
                link = document.createElement('a');

                descColumn = document.createElement('div');
                descColumn.classList.add('col');

                listLink = document.createElement('a');
                listLink.href = data[i].html_url;


                link.appendChild(img);
                listLink.innerHTML = data[i].name + ": <br><br>" + (data[i].description.split("("))[0] + "<br><br> Click to visit project repository!";
                listLink.classList.add("list-group-item");
                listLink.classList.add("list-group-item-action");

                listLink.classList.add("bg-dark");
                listLink.classList.add("text-info");
                listLink.classList.add("p-4");
                listLink.classList.add('h3');
                listLink.target = "_blank";




                var deployedLink = document.createElement('a');
                var imageSpan = document.createElement('span');

                imageSpan.textContent = "Click on image to visit deployed link!";

                if (data[i].homepage == "") {
                    deployedLink.href = data[i].html_url;
                    deployedLink.href = data[i].html_url;
                } else {
                    deployedLink.href = data[i].homepage;
                    deployedLink.href = data[i].homepage;
                }


                deployedLink.appendChild(img);

                imgColumn.appendChild(deployedLink);
                imgColumn.appendChild(imageSpan);
                descColumn.appendChild(listLink);
                newRow.appendChild(descColumn);
                newRow.appendChild(imgColumn);
                row.appendChild(newRow);

            }
        });
}
getApi();