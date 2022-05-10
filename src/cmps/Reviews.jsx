import React from 'react'

export function Reviews() {
  const reviews = [
    {
      by: {
        name: 'Anisha Li',
        img: './assets/images/avatar-anisha.png'
      },
      text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse laboriosam, eius iure praesentium provident id ea natus accusantium dolor fuga et ipsa itaque explicabo velit voluptatum placeat vitae quasi?"'
    },
    {
      by: {
        name: 'Ali Bravo',
        img: './assets/images/avatar-ali.png'
      },
      text: '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel consfusion and everyone is much more focused."'
    },
    {
      by: {
        name: 'Richard Watts',
        img: './assets/images/avatar-richard.png'
      },
      text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias esse laboriosam, eius iure praesentium provident id ea natus accusantium dolor fuga et ipsa itaque explicabo velit voluptatum placeat vitae quasi?"'
    }
  ]
  return (
    <section className="reviews">
      <h1>What they've said</h1>
      <div className="reviews-container">
        {reviews.map(review => (
          <div className="review">
            <img src={review.by.img} alt="" />
            <h4>{review.by.name}</h4>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <button>Get Started</button>
    </section>
  )
}
