import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";

function App() {
  // dispatch - hook allows us to call our redux actions
  const dispatch = useDispatch();
  // grab photos by using useSelector
  const photos = useSelector((state) => state.gallery.photos); // gallery - keyword from "store" // "photos" - from gallerySlice in our state

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk.</p>
      <hr />
      <div className="Gallery">
        {photos.map((photo) => (
          <img
            key={photo.id}
            alt={photo.alt_description}
            src={photo.urls.small_s3}
            width="400"
            height="400"
          />
        ))}
      </div>
      <button>VIEW MORE</button>
    </div>
  );
}

export default App;
