function BookDetails({ books }) {
  return (
    <ul>
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))
      ) : (
        <p>No books found.</p>
      )}
    </ul>
  );
}

export default BookDetails;
