import React from 'react';
const PHONE_ICON =
  'data:image/jpeg;base64,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';
const LINKEDIN_ICON =
  'data:image/png;base64,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';
export function ContactView() {
  return (
    <section id={'contact__view'}>
      <header>
        <h1>HIT ME UP?</h1>
      </header>

      <a id={'email__icon'}  className={'contact__icon'}  href={'mailto:rayzlui@gmail.com'}>
        <img
          src={
            'http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/256/MetroUI-Other-Mail-icon.png'
          }
          alt={'foremail'}
        ></img>
        <br />
        Email
      </a>

      <a id={'phone__icon'} className={'contact__icon'} href={'#email__link'}>
        <img
          src={PHONE_ICON}
          alt={'phone'}
          onClick={() => alert('Please email me first')}
        ></img>
        <br />
        Phone
      </a>

      <a
        id={'linkedin__icon'}
        className={'contact__icon'}
        href={'linkedin profile'}
      >
        <img src={LINKEDIN_ICON} alt={'linkedin'}></img>
        <br />
        LinkedIn
      </a>

      <figure id={'tinder__icon'} className={'contact__icon'}>
        <img
          src={'tinderholder'}
          alt={'tinder'}
          onClick={() => alert('just kiddding ;)')}
        ></img>
        <figcaption onClick={() => alert('just kiddding ;)')}>
          Tinder
        </figcaption>
      </figure>

      <a
        id={'github__icon'}
        className={'contact__icon'}
        href="https://github.com/rayzlui"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={
            'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/github-512.png'
          }
          alt={'github'}
        ></img>
        <br />
        GitHub
      </a>
    </section>
  );
}
