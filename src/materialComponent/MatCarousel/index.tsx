import Carousel from 'react-material-ui-carousel'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'


const MatCarousel = () => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <Carousel
      indicators={true}
      swipe={true}
      cycleNavigation={false}
      autoPlay={false}
      animation='slide'
      duration={600}
      navButtonsAlwaysVisible={true}
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

export default MatCarousel;

function Item(props: any) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img
        style={{ maxHeight: "800px", height: "100%", width: "auto", objectFit: "cover" }}
        src="https://images.unsplash.com/photo-1645045457890-6191ce1891fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Paella dish"
      />
    </div>
  )
}