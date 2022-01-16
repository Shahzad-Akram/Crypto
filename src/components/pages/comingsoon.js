import React from "react";
import Particle from "../components/Particle";
import ComingSoonParticle from "../components/comingSoonParticle";
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
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #8364e2;
  }
  .jumbotron.no-bg{
    height: 100vh;
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
  { image: "1.jpg" },
  { image: "2.jpg" },
  { image: "3.jpg" },
  { image: "4.jpg" },
  { image: "5.jpg" },
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

const comingsoon = () => (
  <div>
    <GlobalStyles />
    <section
      className="jumbotron no-bg"
      style={{ backgroundImage: `url(${"./img/background/8.jpg"})` }}
    >
      <Particle />
      {/* <SliderMainParticle /> */}
      <ComingSoonParticle />
    </section>

    <Footer />
  </div>
);
export default comingsoon;
