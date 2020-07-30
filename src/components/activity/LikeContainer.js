import React from "react";
import Link from "next/link";
import LikeSolid from "@icons/ui/like-solid.js";

function UserImg() {
  return <img src="images/default/user.svg" alt="user image" />;
}

const LikeContainer = (props) => {
  return (
    <div className="activity-item">
      <div className="badge-wrapper">
        <div className="activity-ico">
          <UserImg />
        </div>
        <span className="badge-ico">
          <LikeSolid />
        </span>
      </div>
      <div className="activity-text-wrapper">
        <p className="activity-text">
          <div className="activity-user-wrapper">
            <Link href="/user">
              <a className="activity-user">{props.user}</a>
            </Link>
            さん
          </div>
          <div>
            <Link href="/recipe">
              <a className="activity-recipe">{props.recipe}</a>
            </Link>
            をお気に入りに追加しました。
          </div>
        </p>
        <span className="activity-date">{props.date}</span>
      </div>
      <div className="activity-img">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default LikeContainer;
