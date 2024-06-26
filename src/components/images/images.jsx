const Images = ({ imgUrl, imgAlt, styles }) => (
  <div className={styles} >
    <img src={imgUrl} alt={imgAlt} />
  </div>
);
export default Images;
