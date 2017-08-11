import React from 'react'
import Link from 'gatsby-link'
import '../css/master.css'

const IndexPage = () =>
<div>
  <header>
    <div id="splashes">

    </div>

    <section id="intro">
      <div className="container-lg">
        <h1 style={{
          maxWidth: '480',
          color: 'white',
          marginTop: '75px'
        }}>
          The most fun you've ever had doing good
        </h1>

        <p className="common-BodyText" style={{
          color: 'white'
        }}>
          Aware is a social charity app that gives you the ability to create viral social media challenges for the causes you're most passionate about
        </p>
        <a className="common-Button" href="https://mca7.app.link/4NLZbGSdoD">
          Download the app
        </a>
        {/*
        <ul>
          <li>
            <a href="/payments" className="common-Button" data-analytics-action="payments" data-analytics-source="header_cta">

              Download the app
            </a>
          </li>
          <li>
            <a href="https://dashboard.stripe.com/register" className="common-Button" data-analytics-action="create_account" data-analytics-source="header_cta">
              View Campaigns
            </a>
          </li>
        </ul>
        */}
      </div>
    </section>
  </header>
  <section id="app-illustrations">
    <div className="phone-big">
      <img alt="post" src="https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Post.png" width="240px"/>
    </div>
    <div className="phone-small">
      <img alt="post" src="https://s3.amazonaws.com/aware-contentdelivery-mobilehub-479298082/Discovery+Feed+Copy.png" width="200px"/>
    </div>
  </section>
  <section id="primary">
    <section id="start-campaigns" className="container-lg">
      <h2 class="common-UppercaseTitle" style={{
        maxWidth: '640',
        textAlign: 'right'
      }}>
        <span>
          Get involved in the things that matter
        </span>
      </h2>
      <p className="common-BodyText" style={{
        maxWidth: '640',
        textAlign: 'right'
      }}>
        Run a marathon, give up your birthday for charity, do a tribute, volunteer on the weekend or start a charity registry. Use Aware to raise money for a charitable cause you really care about.

      </p>

    </section>

    <section id="charities-first" style={{paddingBottom:'150px',color:'white'}}>
      <div id="charities" className="container-lg">
        <h2 className="common-UppercaseTitle">

          For Charities
        </h2>
        <p className="common-BodyText" style={{
          maxWidth: '720',
          textAlign: 'left',
          color:'white'
        }}>
          Social media has forever changed the way that people interact with charities, brands and online giving. Aware is the most powerful social fundraising website for your organization, event or corporation. Unlock your community’s incredible giving potential with the leading suite of all-in-one social fundraising tools that turn your donors into fundraisers.
        </p>
        <a className="common-Button" href="mailto:contact@awareapp.co?Subject=Charity Inquiry">
          Learn more
        </a>
      </div>
    </section>
  </section>
  <footer>
    <div>
      <p className="common-BodyText" style={{
        textAlign: 'center',
        padding: '50px 0'
      }}>Copyright 2017 Aware Project LLC. All Rights reserved
      </p>
    </div>
  </footer>

</div>

export default IndexPage
