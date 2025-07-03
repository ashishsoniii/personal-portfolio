import img from "../../../assets/ashish4.jpg";

function PhotoRound() {
  return (
    <div className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden bg-black/40 mx-auto">
      <img
        className="w-full h-full object-cover rounded-full"
        src={img}
        alt="Ashish Soni"
      />
    </div>
  );
}

export default PhotoRound;
