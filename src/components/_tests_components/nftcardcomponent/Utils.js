export default function RealImages({ imageclass, imagesrc, imagename }) {
  return (
    <div>
      <span className={imageclass}>
        <img src={imagesrc} alt={imagename} />
      </span>
    </div>
  );
}
