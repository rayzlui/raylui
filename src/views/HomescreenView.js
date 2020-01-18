import React from 'react';


export function HomescreenView(props) {
  let header = (
    <header className={'topbar'}>
      <h1 className={'header'}>Raymond Lui</h1>
    </header>
  );

  return (
    <section onClick={() => console.log(window.pageYOffset)} id={'home__view'}>
      <h1>This is Home Screen Header</h1>
    </section>
  );
}
