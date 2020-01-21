import React from 'react';

export function BioView(props) {
  return (
    <section id={'bio__view'}>
      <header className={'bio__header'}>
        <h1>About Me</h1>
      </header>
      <figure>
        <img
          className={'bio__photo'}
          src={'https://avatars0.githubusercontent.com/u/49495265?s=460&v=4'}
          alt={'ITS ME!'}
        />
        <figcaption>Fig 1. Hi it&apos;s me!</figcaption>
      </figure>
      <article className={'bio__article'}>
        <p className={'bio__paragraph'}>
          Thank you for visiting my site!!! That feels like such a 1999 thing to
          say on your own website. Hopefully this design is more modern than
          that.
        </p>
        <hr />
        <p>
          Hi, my name is Raymond and I am a (mostly) self taught programmer. I
          am currently on the hunt for a software engineering position in the
          San Francisco Bay Area, where I was born and grew up.
        </p>
        <hr />
        <p>
          I earned a Bachelor of Science in Mathematics from UC Santa Barbara
          (yay Gauchos!). I worked in finance for a bit and then decided to
          start my own business that revolved around my passion for fashion (I'm
          not a huge fan of how that rhymed ugh). After a few years doing that,
          I decided it was time for a change and decided to learn how to code,
          so here I am! While I still have a lot to learn, I believe I can bring
          value to a company as a software developer. I am a keen problem solver
          and relentless when I come come across a difficult problem. Plus I'm
          kind of funny?
        </p>
        <hr />
        <p>
          Other than fashion and programming, I like football (as in soccer,
          never understood why we call it soccer in America, when it is
          literally played with your feet), food and art.
        </p>
      </article>
    </section>
  );
}
