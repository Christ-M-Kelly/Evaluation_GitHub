function renderBooks() {
  const tbody = document.getElementById("book-list");
  tbody.innerHTML = "";

  books.forEach((book, index) => {
    const tr = document.createElement("tr");

    const titleTd = document.createElement("td");
    titleTd.textContent = book.title;
    tr.appendChild(titleTd);

    const authorTd = document.createElement("td");
    authorTd.textContent = book.author;
    tr.appendChild(authorTd);

    // Colonne pour les actions (modifier)

    const dateTd = document.createElement("td");
    dateTd.textContent = book.Date;
    tr.appendChild(dateTd);

    const genreTd = document.createElement("td");
    genreTd.textContent = book.Genre;
    tr.appendChild(genreTd);

    const langTd = document.createElement("td");
    langTd.textContent = book.lang;
    tr.appendChild(langTd);

    const actionsTd = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Modifier titre";
    editBtn.onclick = () => {
      // Insérer ici le code pour modifier le titre du livre
      const newTitle = prompt(
        `Modifier le titre de "${book.title}"`,
        book.title
      );
      if (newTitle !== null) {
        const trimmed = newTitle.trim();
        if (trimmed.length > 0) {
          books[index].title = trimmed;
          renderBooks();
        } else {
          alert("Le titre ne peut pas être vide.");
        }
      }
    };
    actionsTd.appendChild(editBtn);

    tr.appendChild(actionsTd);

    tbody.appendChild(tr);
  });
}

renderBooks();
