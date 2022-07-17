// DOM Elements
let mainLoopElement = document.getElementById('mainLoop');
let addPaperButtonElement = document.getElementById('addPaperButton');
let notificationsBadgeElement = document.getElementById('notificationsBadge');
let notificationBodyElement = document.getElementById('notificationBody');


// main loop
papers.forEach(paper => {
    mainLoopElement.appendChild(paperCard(paper));
});

// addPaperButton event listener
addPaperButtonElement.addEventListener('click', function(){
    addNewPaper(papers);
    mainLoopElement.appendChild(paperCard(papers[papers.length -1]));
});

// notifications badge
if(notifications.length > 0) {
    notificationsBadgeElement.classList.remove('visually-hidden');
}

// notifications center loop
notifications.forEach(notification => {
    let message = document.createElement('a');
    message.textContent = notification.message;
    message.href = 'paper.html';
    //message.href = message.link;

    notificationBodyElement.appendChild(message);
});





function paperCard(paper) {
    
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'bg-light', 'mb-2');

    let divRow = document.createElement('div');
    divRow.classList.add('row', 'g-0');

    let divImg = document.createElement('a');
    divImg.href = "paper.html";
    divImg.classList.add('col-2', 'bg-secondary', 'bg-opacity-25', 'rounded-start', 'd-flex', 'justify-content-center', 'align-items-center-center');

    let divText = document.createElement('a');
    divText.href = "paper.html";
    divText.classList.add('col-8', 'text-decoration-none', 'text-reset');

    let divRead = document.createElement('div');
    divRead.classList.add('col-2', 'd-flex', 'justify-content-center', 'align-items-center-center');
    

    let readButton = document.createElement('button');
    readButton.type = "button";
    readButton.classList.add('btn', 'btn-light');
    divRead.appendChild(readButton);

    let imgReadButton = document.createElement('img');

    if(paper.was_read == true) {
        imgReadButton.src = "assets/img/bookmark-check-fill.svg";
    } else {
        imgReadButton.src = "assets/img/bookmark.svg";
    }
    imgReadButton.width = "24";
    imgReadButton.height ="24";
    readButton.appendChild(imgReadButton);

    readButton.addEventListener('click', function(){
        if(paper.was_read == true){
            paper.was_read = false;
            imgReadButton.src = "assets/img/bookmark.svg";
        } else {
            paper.was_read = true;
            imgReadButton.src = "assets/img/bookmark-check-fill.svg";
        }
    });

    
    let div = document.createElement('div');
    div.classList.add('card-body');
    
    let img = document.createElement('img');
    img.src = "assets/img/filetype-pdf.svg";
    img.alt = "...";
    img.width = "32";
    img.height ="32"
    img.classList.add('img-fluid', 'rounded-start');

    let title = document.createElement('h6');
    title.classList.add('card-title');
    title.textContent = paper.title;

    let author = document.createElement('div');
    author.classList.add('small');
    author.textContent = paper.author;

    let institute = document.createElement('span');
    institute.classList.add('text-muted', 'small');
    institute.textContent = paper.institute;

    let pubDate = document.createElement('span');
    pubDate.classList.add('text-muted', 'small');
    pubDate.textContent = " - " + paper.pub_year;

    divCard.appendChild(divRow);
    divRow.appendChild(divImg);
    divRow.appendChild(divText);
    divRow.appendChild(divRead);
    divImg.appendChild(img);
    divText.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(institute);
    div.appendChild(pubDate);

    return divCard;

}

function addNewPaper(papers){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let institute = document.getElementById('institute').value;
    let pubDate = document.getElementById('pubDate');

    papers.push(
        {
            "title": title,
            "author":   author,
            "institute": institute,
            "pub_date": pubDate,
            "deadline": "",
            "deadline_expired": false,
            "was_read": false
        }
    );

    console.log(papers);
}


console.log(notifications.length);




