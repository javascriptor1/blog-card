function App() {
  return (
    <main className="container">
      <img src="assets/images/illustration-article.svg" alt="" />
      <p>Learning</p>
      <p>
        Published <time datetime="2023-12-21">21 Dec 2023</time>
      </p>
      <h1>
        <abbr title="HyperText Markup Language">HTML</abbr> &
        <abbr title="Cascading Style Sheets"> CSS</abbr> foundations
      </h1>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation. 
      </p>
      <div className="author-div">
        <img src="assets/images/image-avatar.webp" alt="Greg Hooper"/>
        <span>Greg Hooper</span>
      </div>
    </main>
  );
}

export default App;
