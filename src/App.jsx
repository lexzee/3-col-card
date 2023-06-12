import './App.css'
import Card from './components/Card'
import sedan from './images/icon-sedans.svg'
import suv from './images/icon-sedans.svg'
import luxury from './images/icon-sedans.svg'

function App({title, text, image}) {
  const data = [
    {
      id: 1,
      title: 'Sedans',
      text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      image: sedan
    },
    {
      id: 2,
      title: 'SUVs',
      text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      image: suv
    },
    {
      id: 3,
      title: 'Luxury',
      text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      image: luxury
    }
  ];

  const cards = data.map((card) => {
    return <Card key={card.id} title={card.title} text={card.text} image={card.image} />
  })
  return (
    <>
      <div className="App">
        {cards}
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
