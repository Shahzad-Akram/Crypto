import React from "react";
import Particle from "../components/Particle";
import SliderMainParticle from "../components/SliderMainParticle";
import FeatureBox from "../components/FeatureBox";
import CarouselCollectionRedux from "../components/CarouselCollectionRedux";
import CarouselNewRedux from "../components/CarouselNewRedux";
import AuthorListRedux from "../components/AuthorListRedux";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import { Link } from "@reach/router";

const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #8364e2;
        }
      }
    }
  }
  .btn-main{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  p{
    color: #FFFFFF
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #8364e2;
  }
  .jumbotron.no-bg{
    min-height: 100vh;
    overflow: hidden;
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #8364e2;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #8364e2;
  }
  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #8364e2;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #403f83;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #8364e2;
  }
  .nft__item_action span{
    color: #8364e2;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const theClublist = [
  { image: "11.png" },
  { image: "22.png" },
  { image: "33.png" },
  { image: "44.png" },
  { image: "55.png" },
];

const nftSmallGallery = [
  { image: "anim-1.webp" },
  { image: "anim-2.webp" },
  { image: "anim-3.webp" },
  { image: "anim-4.webp" },
];

const roadmapList = [
  {
    percentage: "10%",
    text: "We ship of a screwdriver to Mars to help with the aircraft repair.",
    cross: false,
  },
  {
    percentage: "20%",
    text: "We ship off 5 abandoned aliens (held back from the initial sale) to 5 existing WTMC holders at random.",
    cross: false,
  },
  {
    percentage: "40%",
    text: "Members exclusive merch store is activated, featuring limited edition hoodies/t-shirts, face masks, personalised graphical art with your alien and many other goodies.",
    cross: false,
  },
  {
    percentage: "60%",
    text: "THE MOON is released to the members, for a chance to exclusively stump your personalised flag on the moon, which will remain there forever.",
  },
  {
    percentage: "80%",
    text: "The members fighting area opens for WTMC holders. This is were alien holders will be grouped within their own planets, to fight with other planets in a tournament and rise to the top of the leaderboard. Winning team will win mystery prizes, which can include ethereum or limited edition unreleased nft perks to make your alien even stronger and many more out of this world perks.",
    cross: false,
  },
  {
    percentage: "90%",
    text: " Finger print cards will be released to unlock space crafts. Your space craft nft will be shipped to you directly.",
    cross: false,
  },
  {
    percentage: "100%",
    text: "Time travel machine is repaired, allowing your alien to go back and forth in time to unlock baby aliens, or even change their fate to look completely different.",
    cross: false,
  },
];

const homeone = () => (
  <div>
    <GlobalStyles />
    <section
      className="jumbotron no-bg position-relative"
      style={{ backgroundImage: `url(${"./img/background/8.jpg"})` }}
    >
      <Particle />
      <SliderMainParticle />
    </section>
    {/* 
    <section className="container no-bottom position-relative">
      <div className="row">
        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/1.png" alt="" className="mb20" />
            <h4>Metamask</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/2.png" alt="" className="mb20" />
            <h4>Bitski</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/3.png" alt="" className="mb20" />
            <h4>Fortmatic</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/4.png" alt="" className="mb20" />
            <h4>WalletConnect</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/5.png" alt="" className="mb20" />
            <h4>Coinbase Wallet</h4>
          </span>
        </div>

        <div className="col-lg-2 col-sm-4 col-6 mb30">
          <span className="box-url">
            <img src="./img/wallet/6.png" alt="" className="mb20" />
            <h4>Arkane</h4>
          </span>
        </div>
      </div>
    </section> */}

    <section
      id="about"
      className="container scroll-set no-bottom position-relative"
    >
      <div className="spacer-double"></div>
      <div className="row">
        <div className="col">
          <div className="px-0 col-12 col-lg-6">
            <h2 className="lh-sm text-capitalize">WHY JOIN WTMC:</h2>
            <p>
              WTMC is collection of 10,000 Alien NFTs -- unique digital
              collectibles living on the Ethereum blockchain. Your alien doubles
              as your Mars club membership card and grants access to
              members-only benfits, the first of which is access to THE MOON, an
              area to roam around and stamp your flag. Future areas and perks
              can be unlocked by the community through roadmap activation.
            </p>
          </div>
        </div>
      </div>
      <div className="spacer-double"></div>

      <div className="row align-items-center">
        <div className="col">
          <div className="px-0 col-12 col-lg-11">
            <h2>The Specs</h2>
            <p>
              Each Alien is unique and programmatically generated from over 170
              possible traits including expression, headwear, Armour and more.
              all aliens are powerful but some are rarer than others.
            </p>

            <p>
              The aliens are stored as ERC-721 tokens on the Ethereum blockchain
              and hosted on IPFS.{" "}
              <span className="text-primary-1 text-decoration-underline">
                (See Record and Proof)
              </span>
              . Purchasing an alien cost 0.08 ETH.{" "}
            </p>

            <p>
              Tp Access members-only areas such as THE MOON, Alien holders will
              need to be signed into their Metamask Wallet.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 mt-3 mt-md-0">
          <div className="height-3">
            <img
              className="d-block h-100 w-100"
              src="./img/items/anim-8.webp"
              alt=".."
            />
          </div>
        </div>
      </div>
      <div className="spacer-double">
        <hr />
      </div>
      <div>
        <div className="px-0 col-12 col-lg-8 col-xl-7 mb-5">
          <h2 className="text-capitalize">Welcome to the club</h2>
          <p>
            When you buy an Alien, you're not simply buying an avatar or a
            provably-rare piece of art. You are gaining membership access to a
            club whose benefits and offerings will increase over time. Your
            Alien can serve as your digital identity and open digital doors for
            you.
          </p>
        </div>
        <ul className="nav row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 text-center gy-4">
          {theClublist.map((item) => (
            <li>
              <div className="d-flex d-sm-block align-items-center club-c">
                <div className="height-small mx-auto mb-3">
                  <img
                    className="d-block h-100 w-100"
                    src={`./img/wallet/${item.image}`}
                    alt=".."
                  />
                </div>
                <span className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, fugiat.
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section
      id="about"
      className="container scroll-set no-bottom position-relative"
    >
      <div className="spacer-double"></div>
      <div className="row align-items-center">
        <div className="col">
          <div className="px-0 col-12 col-lg-11">
            <h2>THE MOON</h2>
            <p>
              The WTMC MOON will become operational once we hit the 60% mark on
              the roadmap. It contains a space of area within a interactive moon
              accessible only to wallets containing at least one WTMC alien.
              This area will allow members only to personalise and create their
              own flags to be stumped onto the interactive moon and forever
              remain there.
            </p>

            <p>
              Best flags will be showcased every month on our Twitter and
              Instagram, so get creative!
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 mt-3 mt-md-0">
          <div className="height-1">
            <img
              className="d-block h-100 w-100 rounded-lg shadow-primary"
              src="./img/wallet/44.png"
              alt=".."
            />
          </div>
        </div>
      </div>
      {/* <div className="spacer-double">
        <hr />
      </div> */}
    </section>

    <section className="container no-top no-bottom position-relative">
      <div className="spacer-double">
        <hr />
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="px-0 col-12 col-lg-11">
            <h2 className="lh-sm text-capitalize">
              WELCOME TO THE MARS CLUB : <br /> HOW IT ALL BEGAN
            </h2>
            <p>
              LWe are in the year 2050, Humans have finally reached mars using
              the Space-Y technology. Once landing on mars, we had realised that
              there was already civilisation an we were not alone. There were
              extra-terrestrial beings that have been living amongst our
              unniverse with more technology and power than we have ever
              encountered before. Humans now have to inhabit in mars and live in
              peace and harmony with these creatures as our home planet "earth"
              had become over populated which created chaos, forcing some of the
              human race to find a new planet to live on. Whilst wondering in
              mars, we encountered a very advanced base, later known as the
              "Martian". There were creatures within this base, one of which
              looked older and wiser than the others. We used our high-tech
              voice translator created by our well known "Professor Hulk" in the
              year 2022 to communicate with this wise alien. This wise alien was
              not surprised seeing us, but in fact mentioned that they were one
              step ahead and discovered about human race many millenniums ago.
              This wise alien also mentioned that they had flew over mars with
              their high-tech aircrafts and lost signal, creating the aircrafts
              to crash into mars. Ever since then they have been repairing their
              aircrafts, but could not get signla back to fly back home or let
              human race awaire of their presence. The wise alien mentioned
              that, not all aliens were from same home planet, which create
              fueds and fights between them to see who can get back home first
              and destroy the rival planets. There was however a way to
              recalibrate the aircrafts so that the aliens can go back to their
              own home planets. In order to recalibrate the aircrafts, each
              alien needs a unique code, which is 10,000 specially chosen human
              DNAs. We are now in the search to find these 10,000 chosen humans
              who have been destined to give their alien partner freedom and in
              return, they will receive powers that have never been seen before.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 mt-3 mt-md-0  ">
          <div className="height-1">
            <img
              className="d-block h-100 w-100 rounded-lg shadow-primary"
              src="./img/items/home2.jpg"
              alt=".."
            />
          </div>
        </div>

        {/* <div className="col-12 col-md-5 col-lg-4 mt-3 mt-md-0">
          <ul className="nav row row-cols-2 gy-4">
            {nftSmallGallery.map((item) => (
              <li>
                <div className="height-2">
                  <img
                    className="d-block h-100 w-100 rounded rounded-3 shadow-primary"
                    src={`./img/items/${item.image}`}
                    alt=".."
                  />
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      <div className="spacer-double"></div>
      <div className="row">
        <div className="col">
          <div className="px-0 col-12 col-lg-11">
            <h3 className="mb-2 lh-sm text-capitalize text-primary-1">
              Fair Distribution
            </h3>
            <h4 className="mb-4 lh-sm text-capitalize">
              (Bonding curves are a ponzi)
            </h4>
            <p>
              There are no bonding curves here. Buying a Alien costs 0.08 ETH.
              There are no price tiersL BAYC membership costs the same for
              everyone.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 mt-3 mb-md-0">
          <div className="h-100 d-flex flex-column">
            <small className="mt-auto">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam amet reiciendis, ipsa soluta, officiis accusantium
              quibusdam facilis optio, vitae hic laborum? Vero dolor incidunt
              quasi suscipit et voluptatem, ipsum eius.
            </small>
          </div>
        </div>
      </div>
      <div className="spacer-double"></div>
      <div className="bg-primary-1 p-3" style={{ borderRadius: "50px" }}>
        <ul className="nav row row-cols-1 row-cols-lg-3 text-center justify-content-center align-items-center gy-4">
          <li>
            <h3 className="mb-0">Buy AN ALIEN</h3>
          </li>
          <li>
            <p className="mb-0 text-white-50">
              The initial sale has sold out. To get your Alien, check out the
              collection on OpenSea.
            </p>
          </li>
          <li>
            <button
              type="button"
              className="btn-main btn-close-white text-uppercase mx-auto"
            >
              Buy AN ALIEN On Opensea
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section
      id="road"
      className="container scroll-setno-bottom position-relative"
    >
      <div className="spacer-double">
        <hr />
      </div>

      <div className="row align-items-center">
        <div className="col">
          <div className="px-0 col-12 col-lg-10 col-xl-7">
            <h2 className="text-capitalize">Roadmap activations</h2>
            <p>we're in this for the logn haul.</p>
            <p>
              we've set up some goalposts for ourselves. Once we hit a targe
              sell through percentage, we will beging to work on realizing the
              started goal.
            </p>
          </div>
          <div className="px-0 col-12 col-lg-11">
            <ul className="nav flex-column gap-3 small">
              {roadmapList.map((item) => (
                <li>
                  <div className="d-flex">
                    <span className="text-primary-1 me-3 me-md-4">
                      {item.percentage}
                    </span>
                    <span
                      className={`${
                        item.cross && "text-decoration-line-through"
                      }`}
                      style={{ color: "#FFFFFF" }}
                    >
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4 mt-3 mt-md-0">
          <div className="height-1">
            <img
              className="d-block h-100 w-100 rounded-lg shadow-primary"
              src="./img/items/merch.png"
              alt=".."
            />
          </div>
        </div>
      </div>
      <div className="spacer-double">
        <hr />
      </div>
      <div>
        <h2 className="text-capitalize">Community tools</h2>
        <div className="row">
          <div className="col">
            <div className="px-0 col-12 col-lg-11">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                voluptates? Minima cum excepturi rerum ipsum omnis. Nemo, nam?
                Quo, accusantium debitis aspernatur deserunt autem repellat
                ratione illo aliquam aperiam molestias obcaecati vel blanditiis
                perspiciatis nam, alias quas suscipit, vero harum quam! Aut nemo
                quae culpa magni repellendus. Corrupti, debitis. Dolorem, cumque
                alias laborum nulla suscipit temporibus optio id labore aperiam
                reprehenderit sequi et deserunt neque veritatis accusantium
                maxime enim in quia quod distinctio, minima sit sint
                voluptatibus laudantium?
              </p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-3 mt-3 mt-md-0">
            <ul className="nav flex-column gap-3">
              <li>
                <button
                  type="button"
                  className="btn-main py-3 w-100 text-uppercase mx-auto"
                >
                  Neftexp.io
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn-main py-3 w-100 text-uppercase mx-auto"
                >
                  Raprity.Tools
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-2">
          <h2>New Items</h2>
        </div>
      </div>
      <CarouselNewRedux />
    </section>

    <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12">
          <h2>Top Sellers</h2>
        </div>
        <div className="col-lg-12">
          <AuthorListRedux />
        </div>
      </div>
    </section>

    <section className="container no-top no-bottom">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-2">
          <h2>Hot Collections</h2>
        </div>
        <div className="col-lg-12">
          <CarouselCollectionRedux />
        </div>
      </div>
    </section> */}

    <section id="create" className="container scroll-set position-relative">
      <div className="row">
        <div className="spacer-double"></div>
        <div className="col-lg-12 mb-3">
          <h2>Create and Sell Now</h2>
        </div>
        <FeatureBox />

        <Link className="btn-main  text-uppercase mx-auto" to="/create">
          Create
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);
export default homeone;
