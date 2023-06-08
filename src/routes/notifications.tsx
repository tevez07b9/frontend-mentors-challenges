import React from "react";
import "../styles/notifications.css";
import Header from "../components/Notifications/Header";
import NotificationItem from "../components/Notifications/NotificationItem";

const notifications = [
  {
    name: "Mark Webber",
    avatar: "./images/avatar-mark-webber.webp",
    notifications: [
      { text: "reacted to you recent post" },
      { text: "My first tournament today!", tag: true },
    ],
    unread: true,
    time: "1m ago",
  },
  {
    name: "Angela Gray",
    avatar: "./images/avatar-angela-gray.webp",
    notifications: [{ text: "followed you" }],
    unread: true,
    time: "5m ago",
  },
  {
    name: "Jacob Thompson",
    avatar: "./images/avatar-jacob-thompson.webp",
    notifications: [
      { text: "has joined your group" },
      { text: "Chess Club", tag: true },
    ],
    unread: true,
    time: "1 day ago",
  },
  {
    name: "Rizky Hasanuddin",
    avatar: "./images/avatar-rizky-hasanuddin.webp",
    notifications: [{ text: "sent you a private message" }],
    time: "5 days ago",
    dm: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'am already having lot's of fun and improving my game.",
  },
  {
    name: "Kimberly Smith",
    avatar: "./images/avatar-kimberly-smith.webp",
    image: "./images/image-chess.webp",
    notifications: [{ text: "commented on your picture" }],
    time: "1 week ago",
  },
  {
    name: "Nathan Peterson",
    avatar: "./images/avatar-nathan-peterson.webp",
    notifications: [
      { text: "reacted to your recent post" },
      { text: "5 end-game strategies to increase your win rate", tag: true },
    ],
    time: "2 weeks ago",
  },
  {
    name: "Anna Kim",
    avatar: "./images/avatar-anna-kim.webp",
    notifications: [
      { text: "left the group" },
      { text: "Chess Club", tag: true },
    ],
    time: "2 weeks ago",
  },
];

const Notifications = () => {
  return (
    <main className="main">
      <article className="card">
        <Header />
        <div className="flex flex-col space-y-4 mt-6">
          {notifications.map((n, i) => (
            <NotificationItem {...n} key={`notification-item-${i}`} />
          ))}
        </div>
      </article>
    </main>
  );
};

export default Notifications;
