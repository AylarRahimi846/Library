let uniqueAuthors = [];
let temp = []
let count = 0;

temp = BOOKS.map(item => {
    return item.author;
});

for (let i = 0; i < temp.length; i++) {

    uniqueAuthors.push(temp[i]);
    for (let j = i + 1; j < temp.length; j++) {
        if (temp[i] == temp[j]) {
            temp.splice(j, 1)
            j--;
        }

    }

}

temp = uniqueAuthors.map(item => {
    return `<li>
          <button class="mainSection__filter--btn">
                ${item}
                </button>
            </li>`
}).join("");


filter.innerHTML = temp;

