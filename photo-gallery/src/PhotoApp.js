import { Carousel } from "react-carousel-minimal";

function PhotoApp() {
   const data = [
      {
         image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SL1500_.jpg",
         // caption: "iPad 1"
      },
      {
         image: "https://m.media-amazon.com/images/I/61CjYtVb7cL._AC_SX679_.jpg",
         // caption: "ipad"
      },
      {
         image: "https://m.media-amazon.com/images/I/81jlw8nEgJL._AC_SX679_.jpg",
         // caption: "ipad"
      },
      {
         image: "https://m.media-amazon.com/images/I/71CVCLyeLnL._AC_SX679_.jpg",
         // caption: "ipad"
      },
      {
         image: "https://m.media-amazon.com/images/I/81bbNljKvwL._AC_SX679_.jpg",
         // caption: "ipad"
      },
      {
         image: "https://m.media-amazon.com/images/I/61yDmG0JkQL._AC_SX679_.jpg",
         // caption: "ipad"
      },
      {
         image: "https://m.media-amazon.com/images/I/91AhhzjszHL._AC_SL1500_.jpg",
      },
      {
         image: "https://m.media-amazon.com/images/I/81FzAC9EHYL._AC_SL1500_.jpg",
      },
   ];

   const captionStyle = {
      fontSize: "2em",
      fontWeight: "bold",
   };
   const slideNumberStyle = {
      fontSize: "20px",
      fontWeight: "bold",
   };
   return (
      <div className="App">
         <div style={{ textAlign: "center" }}>
            {/* <h2>Photo Gallery</h2>
        <p></p> */}
            <div
               style={{
                  padding: "0 20px",
               }}
            >
               <Carousel
                  data={data}
                  time={2000}
                  width="482px"
                  height="540px"
                  // captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={false}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={false}
                  dots={false}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="white"
                  slideImageFit="contain"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                     textAlign: "center",
                     maxWidth: "482px",
                     maxHeight: "540px",
                     margin: "40px auto",
                     padding: "auto",
                  }}
               />
            </div>
         </div>
      </div>
   );
}

export default PhotoApp;
