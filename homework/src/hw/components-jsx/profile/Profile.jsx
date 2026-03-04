import React from "react"
import user from "./user.json"

export default function Profile() {
  return (
    <div className="card">
      <div className="description">
        <img src={user.avatar} alt="" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
    </div>
  );
}

