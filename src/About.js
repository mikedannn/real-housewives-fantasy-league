import './App.css';

function About() {
  return (
    <div className="aboutPage">
      <h1 className='aboutTitle'>About Our App</h1>
      <div>
        <img className='directorChair' src='https://www.pngmart.com/files/7/Directors-Chair-PNG-HD.png' />
      </div>
      <div className='aboutDescription'>
        <p>This application engages the user by allowing them to build their own cast of Real Housewives from any of the cities in the franchise.  The user becomes the director of his or her own cast of housewives upon visiting our website.  Feel free to like any housewife card or add them to your cast.  Visit your "My Cast" page to see who you've hired.  One can even create new housewife cards by visiting the "Add New Housewife" tab.  Easily search for any housewife using the "Search" tab.  Enjoy being the casting director of your very own reality TV cast.</p>
      </div>
      <div className='aboutDescription2'>
        <p>Web application was created using React. </p>
      </div>
    </div>
  );
}

export default About;
