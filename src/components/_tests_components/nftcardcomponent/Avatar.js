import RealImages from "./Utils";
import avatar from "./Images/image-avatar.png";

export default function Avatar({ creatorName }) {
  return (
    <div className="avatar">
      <RealImages imagesrc={avatar} imagename="Avatar picture" />
      <div className="avatar-info">
        <p>
          Ceation of <span>{creatorName}</span>
        </p>
      </div>
    </div>
  );
}
