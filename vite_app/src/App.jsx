
import './App.css'

function App() {
  
  return (
    <>

  <div className="upper-body">
    <div className="side-bar">
      <div className="logo">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Spotify%20logo.png?raw=true"
          alt="Spotify Logo"
        />
      </div>
      <div className="content1 sidebar-content">
        {[
          {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true",
            label: "Home",
          },
          {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true",
            label: "Search",
          },
          {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true",
            label: "Your Library",
          },
        ].map((item, index) => (
          <div className="home" key={index}>
            <img src={item.src} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="content2 sidebar-content">
        {[
          {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true",
            label: "Create Playlist",
          },
          {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true",
            label: "Liked Songs",
          },
          {
            src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true",
            label: "Your Episodes",
          },
        ].map((item, index) => (
          <div className="home" key={index}>
            <img src={item.src} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="content3 sidebar-content">
        {["FAV", "Daily Mix1", "Discover Weekly", "Malayalam", "Dance/ElectronicMix", "EDM/Popular"].map(
          (label, index) => (
            <p key={index}>{label}</p>
          )
        )}
      </div>

      <div className="content4 sidebar-content">
        <div className="home">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true"
            alt="Install Apps"
          />
          <p>Install Apps</p>
        </div>
      </div>
    </div>

    <div className="maincontent">
      <div className="navbar">
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true"
          alt="Navigation"
        />
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true"
          alt="User"
        />
      </div>

      <div className="content5">
        <p>Good morning</p>
        <div className="cards">
          {[
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true",
              label: "Liked Songs",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true",
              label: "Neffex Playlist",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true",
              label: "K/DA",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true",
              label: "Liked Songs",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true",
              label: "Dance/ElectronicMix",
            },
          ].map((item, index) => (
            <div className="card1" key={index}>
              <img src={item.src} alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content6">
        <div className="navbar2">
          <p>Shows you might like</p>
          <p>See All</p>
        </div>
        <div className="songs-playlist">
          {[
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true",
              label: "Weekly Motivation",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true",
              label: "Meditation Self",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true",
              label: "Words Beyond Act...",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true",
              label: "The Alexa Show",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true",
              label: "The stories of Ma..",
            },
            {
              src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true",
              label: "Motivation Daily B..",
            },
          ].map((item, index) => (
            <div className="cards2" key={index}>
              <img src={item.src} alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div className="footer">
      <div className="footer-card">
        <div className="footer2">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image11.png?raw=true"
            alt="Now Playing"
          />
          <p>Dreaming On</p>
          <p>Neffex</p>
        </div>
        <img
          src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/bx_bxs-heart.png?raw=true"
          alt="Like"
        />
      </div>
      <img
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Music%20Player%20Options.png?raw=true"
        alt="Music Player Options"
      />
      <img
        src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Right%20options.png?raw=true"
        alt="Right Options"
      />
    </div>
  </footer>
    
    </>

  )
}


export default App
