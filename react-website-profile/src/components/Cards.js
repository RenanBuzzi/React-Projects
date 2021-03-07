import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (    
    <div className='cards'>
    <div className="sub_title_home">
      <h1>Check out these EPIC Destinations!</h1>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='About Me'
              path='/about'
            />
            <CardItem
              src='images/img-2.jpg'
              text='10 + years of experience as a Software engineer the most part working with Microsoft technologies...'
              label='My Career'
              path='/jobexperirnces'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/contactme2.jpg'
              text='Feel free to contact me anytime.'
              label='Contact'
              path='/Contact'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/about'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
