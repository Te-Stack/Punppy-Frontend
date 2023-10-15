import Image from 'next/image'


import Navbar from './components/navbar/Navbar'


export default function Home() {

  return (
    <div>
      
      <div>
        <div className="header">
        <Navbar/>

        <div className="row ">

<div className="col-lg-6">

  <div className="ps-lg-5 pt-5 text-white header-text">
    <h1>
      Join the <span> Love <br/> and Relationship </span> <br/> Conversations on <span>Punppy </span>
    </h1>
    <p className="pt-3">Connect with others, share your stories, and get 
      relationship advice from a diverse community of users</p>
  <div className="mt-4">
  <a className="btn text-white sl1 px-5 me-2">Login</a>
  <a className="btn sl px-5">Signup</a>
  </div>
</div>
</div>
<div className="col-lg-6">
  <img src="images/mock.png" className="img-fluid mock" width="700"/>
</div>
      </div>

        </div>
      
      <div className="row cool px-3" >
      <h2>This is the cool spot to unwind, drop gists and find love</h2>
      <p>Whether you're looking to unwind, engage in some casual
      conversation, or find that special someone, Punppy is the place to be. </p>
      </div>
      <div className="row mt-5 ps-lg-5">
      <div className="col-lg-4">
      <ul>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/@.png" className="image" alt="Icon"/>
        <div>
          <h3>Follow your Faves</h3>
          <p>Personalize your Punppy experience, follow topics and people.</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/2.png" className="image" alt="Icon"/>
        <div>
          <h3>Send a DM</h3>
          <p>Send private messages to each other. Have personal conversations.</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/3.png" className="image" alt="Icon"/>
        <div>
          <h3>Run paid ads</h3>
          <p>Get more visibility with quality leads
            when you place an ad on Punppy.</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/4.png" className="image" alt="Icon"/>
        <div>
          <h3>Get paid for post views</h3>
          <p>Earn money when other users view your posts. Terms and conditions apply</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/5.png" className="image" alt="Icon"/>
        <div>
          <h3>Get answers to questions</h3>
          <p>Post questions on the forum or read
            answers to people’s questions</p>
        </div>
      </div>
      </li>

      </ul>
      </div>
      <div className="col-lg-4 girl">
      <img src="images/girl.png" width="400px"/>
      </div>
      <div className="col-lg-4">
      <ul>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/6.png" className="image" alt="Icon"/>
        <div>
          <h3>Make new friends</h3>
          <p>Find new pals, add them as friends
            and maybe share a drink later.</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/7.png" className="image" alt="Icon"/>
        <div>
          <h3>Read trends on our blog</h3>
          <p>Stay informed on the latest news
            around the world as they happen</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/8.png" className="image" alt="Icon"/>
        <div>
          <h3>Like & upvote posts</h3>
          <p>Posts you upvote are shown to
            more people and given recognition.</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/9.png" className="image" alt="Icon"/>
        <div>
          <h3>Stay Protected</h3>
          <p>No spam from scammers.
            Just real people in real time</p>
        </div>
      </div>
      </li>
      <li className="mb-5 flex">
      <div className="flex-container">
        <img src="images/home-icons/10.png" className="image" alt="Icon"/>
        <div>
          <h3>Build a Community</h3>
          <p>Get followed by people who are in
            love with your vibe</p>
        </div>
      </div>
      </li>
      </ul>
      </div>
      </div>
      <div className="row theme-col text-center px-3" style={{marginTop: "100px"}}>
      <h4>LIVE FROM <span>PUNPPY</span></h4>
      <h2>Something like Quora or Reddit, just better</h2>
      <p>Kick back, relax, and plug in to love, laughter, and good vibes</p>
      </div>

      </div>
    </div>


      







     
    
    
  )
  
}
