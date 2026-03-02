const SinglePlayer = ({ Player }) => {
  const {
    name,
    country,
    role,
    battingStyle,
    bowlingStyle,
    rating,
    price, 
    image,
  } = Player || {};
  return (
    <div>
      <h1>This is SinglePlayer component</h1>
    </div>
  );
};

export default SinglePlayer;

