import "../scss/block.scss";
import shirt from "../assets/t-shirst/block_img2.png";
export default function Block() {
  return (
    <div className="block">
      <div className="block_text">
        <h2>MAKE IT PERSONAL</h2>
        <p>ADD A NAME AND NUMBER</p>
        <p className="text_2">TO YOUR FAVORITE JERSEY</p>
        <button className="btn_block">CUSTOMIZE NOW</button>
      </div>
      <img src={shirt} />
    </div>
  );
}
