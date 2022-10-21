const features = [
  {
    image: "/images/movie.png",
    title: "Endless entertainment",
    desc: "Explore thousands of hours of TV series, movies and originals.",
  },
  {
    image: "/images/tv.png",
    title: "Available on your favourite devices",
    desc: "Stream on up to four screens at once on compatible devices.",
  },
  {
    image: "/images/safety.png",
    title: "Easy-to-use parental controls",
    desc: "EKeep your family safe with our intuitive parental controls.",
  },
];

const faq = [
  {
    question: "What is Disney+?",
    answer: `<span>
      Disney+ is the streaming home for entertainment from
      Disney, Pixar, Marvel, Star Wars, National Geographic and
      more.
    </span>
    <br />
    <br />
    <span>
      Disney+ has a number of benefits included in the standard
      subscription price;
    </span>
    <ul className="list-disc pl-10 mt-4	">
      <li>
        <p>
          <span>
            Exclusive Originals you can’t see anywhere else,
            blockbuster movies, bingeable shows, snackable
            shorts, and inspiring documentaries
          </span>
        </p>
      </li>
      <li>
        <p>
          <span>
            Unlimited downloads on up to 10 devices and up to 7
            different profiles
          </span>
        </p>
      </li>
      <li>
        <p>
          <span>
            4K UHD streaming with Dolby Vision and Dolby Atmos
            support on compatible devices for no extra cost
          </span>
        </p>
      </li>
      <li>
        <p>
          <span>
            A robust parental controls system including
            dedicated kids profiles
          </span>
        </p>
      </li>
      <li>
        <p>
          <span>Up to 4 screens can stream simultaneously</span>
        </p>
      </li>
      <li>
        <p>
          <span>
            Host virtual viewing parties for up to 6 personal
            friends with GroupWatch
          </span>
        </p>
      </li>
    </ul>`,
  },
  {
    question: "What can I watch on Disney+?",
    answer: `<span>
      With thousands of films and series from the greatest
      storytellers around the globe and more added each month, you
      will always find something to watch on Disney+
    </span>
    <ul className="list-disc pl-10 mt-4	">
      <li>
        <p>
          <span>
            The latest live action and animated blockbusters from
            Disney, like
          </span>
          <i>
            <span>Cruella</span>
          </i>
          <span> and </span>
          <i>
            <span>Encanto</span>
          </i>
        </p>
      </li>
      <li>
        <p>
          <span>
            Heart-warming storytelling for all ages from the
            masterminds at Pixar such as
          </span>
          <i>
            <span>Luca</span>
          </i>
          <span> or </span>
          <i>
            <span>Soul</span>
          </i>
        </p>
      </li>
      <li>
        <p>
          <span>
            Experience the ever-growing story of the Marvel
            Cinematic Universe like never before with must-see
            exclusive Original series from Marvel Studios like
          </span>
          <i>
            <span>Hawkeye</span>
          </i>
          <span>,</span>
          <i>
            <span> WandaVision </span>
          </i>
          <span>and</span>
          <i>
            <span> Loki</span>
          </i>
        </p>
      </li>
      <li>
        <p>
          <span>
            Stream epic cinema-quality stories from a galaxy far,
            far away including
          </span>
          <i>
            <span>Obi-Wan Kenobi </span>
          </i>
          <span>and </span>
          <i>
            <span>The Mandalorian</span>
          </i>
        </p>
      </li>
      <li>
        <p>
          <span>
            Open your eyes to the beauty of our planet with fearless
            National Geographic explorers and insightful
            documentaries
          </span>
        </p>
      </li>
      <li>
        <p>
          You will find bingeable series that everyone is talking
          about like the global phenomenon <i>The Walking Dead</i>
        </p>
      </li>
    </ul>`,
  },
  {
    question: "How much does Disney+ cost?",
    answer: `<span>
      Disney+ subscription costs 34.99 TL a month. Alternatively,
      choose an annual plan (349.90 TL a year) and get 12 months for
      the price of 10!*
    </span>
    <br />
    <br />
    <span>*Savings compared to 12 months of the monthly price</span>`,
  },
  {
    question: "What devices are supported?",
    answer: ` <span>
      Disney+ supports mobile devices, web browsers, game consoles,
      set-top boxes, and smart TVs. Click here for the full list.
    </span>`,
  },
  {
    question: "Is there any commitment when signing up for Disney+?",
    answer: ` <span>
      There are no commitments and you can cancel at anytime,
      effective at the end of your current billing period. Just
      follow the below 5 easy steps:
    </span>
    <ul className="list-decimal pl-10 mt-4	">
      <li>
        <p>
          <span>Go to www.disneyplus.com and log in</span>
        </p>
      </li>
      <li>
        <p>
          <span>Select your Profile</span>
        </p>
      </li>
      <li>
        <p>
          <span>Select Account</span>
        </p>
      </li>
      <li>
        <p>
          <span>Select Cancel Subscription</span>
        </p>
      </li>
      <li>
        <p>
          <span>Select Complete Cancellation to confirm</span>
        </p>
      </li>
    </ul>
    <span>
      For more information click
      <a className="text-white underline" href="#">
        here
      </a>
      .
    </span>`,
  },
];

const devices = [
  {
    image: "/images/television.png",
    title: "TV",
    desc: ` Amazon Fire TV
    <br />
    Android TV
    <br />
    Apple TV
    <br />
    Arçelik*
    <br />
    Beko*
    <br />
    Chromecast
    <br />
    Hisense
    <br />
    LG
    <br />
    Panasonic
    <br />
    Samsung
    <br />
    Vestel*`,
  },
  {
    image: "/images/pc.png",
    title: "Computer",
    desc: `Chrome OS
    <br />
    MacOS
    <br />
    Windows PC`,
  },
  {
    image: "/images/mobile.png",
    title: "Mobile & Tablet",
    desc: ` Amazon Fire Tablets
    <br />
    Android Phones &amp; Tablets
    <br />
    iPhone &amp; iPad`,
  },
  {
    image: "/images/console.png",
    title: "Game Consoles",
    desc: `PS4
    <br />
    PS5
    <br />
    Xbox One
    <br />
    Xbox Series X<br />
    Xbox Series S`,
  },
];

const brands = [
  {
    image: "/images/disnep.png",
    video: "/videos/disney.mp4",
  },
  {
    image: "/images/pixar.png",
    video: "/videos/pixar.mp4",
  },
  {
    image: "/images/marvel.png",
    video: "/videos/marvel.mp4",
  },
  {
    image: "/images/starwars.png",
    video: "/videos/star-wars.mp4",
  },
  {
    image: "/images/national-geographic.png",
    video: "/videos/national-geographic.mp4",
  },
];

export { features, faq, devices, brands };
