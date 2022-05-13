window.addEventListener('load', function () {
let images = document.querySelectorAll('img');
for(i = 0; i < images.length; i+=2) {
    var que = document.createElement('div');
    que.setAttribute('class', "que");
    var formulation = document.createElement('div');
    formulation.setAttribute('class', "formulation");
    var qtext = document.createElement('div');
    images[i].setAttribute('class', 'KEY');
    qtext.appendChild(images[i]);

    formulation.appendChild(qtext);


    var outcome = document.createElement('div');
    outcome.setAttribute('class', "outcome");
    var rightanswer = document.createElement('div');
    images[i+1].setAttribute('class', 'VAL');
    rightanswer.appendChild(images[i+1]);
    outcome.appendChild(rightanswer);

    que.appendChild(formulation);
    que.appendChild(outcome);
    document.querySelector('body').appendChild(que);
 }

 let link = document.createElement('link');
 link.rel="stylesheet";
 link.type ="text/css";
 link.href = "https://curs.upb.ro/2021/theme/styles.php/boost/1648148680_1/all";
 document.head.appendChild(link);
})
