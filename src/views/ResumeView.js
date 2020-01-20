import React from 'react';

export function ResumeView(props) {
  return (
    <section id={'resume__view'}>
      <header>
        <h1>Resume</h1>
      </header>
      <article className={'resume__details'}>
        <header>
          <h3>Education</h3>
        </header>
        <p>
          University of California at Santa Barbara — Bachelor of Science in{' '}
          <strong>Mathematics</strong>,{' '}
          <span className={'resume__dates'}>2014</span>
        </p>
        <header>
          <h3>Languages</h3>
        </header>
        <p>
          <strong>Javascript, Ruby, HTML, CSS</strong>
        </p>
        <header>
          <h3>Libraries/Frameworks</h3>
        </header>
        <p>
          <strong>
            NodeJS, React, Redux, Express (beginner), MongoDB (beginner), Ruby
            on Rails (beginner), Jest, Enzyme, styled-components, CSS modules,
            SCSS
          </strong>
        </p>
        <header>
          <h3>Work Experience</h3>
        </header>
        <dl>
          <dt>
            <strong>Online Clothing Reseller</strong> | San Francisco, CA |{' '}
            <span className={'resume__dates'}>2017-present</span>
          </dt>
          <dd>
            <ul>
              <li>
                Researched and analyzed men’s fashion to forecast upcoming
                trends.
              </li>
              <li>
                Targeted correct markets and using keywords to appear in their
                search.
              </li>
            </ul>
          </dd>

          <dt>
            <strong>Senior Underwriter</strong> | <strong>SoFi</strong> |
            Healdsburg, CA | <span className={'resume__dates'}>2015-2016</span>
          </dt>
          <dd>
            <ul>
              <li>
                Underwrote over $40 million in loans, with a best month of 8
                million dollars.
              </li>
              <li>
                Perform audits for SoFi’s $380 million securitization, which
                earned an AAA from Moody’s.
              </li>
              <li>
                Evaluated applicants financial strength and repayment capacity
                through income documentation, credit report, and job stability
                analysis.
              </li>
              <li>
                Investigated applicants to prevent identity theft and fraudulent
                income representation.
              </li>
            </ul>
          </dd>
        </dl>
      </article>
    </section>
  );
}
