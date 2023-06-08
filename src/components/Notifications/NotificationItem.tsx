import React from "react";

type Notification = {
  text: string;
  tag?: boolean;
};

interface Props {
  unread?: boolean;
  name: string;
  avatar: string;
  notifications: Notification[];
  time: string;
  dm?: string;
  image?: string;
}

const TextItem: React.FC<{ notification: Notification; isName?: boolean }> = ({
  notification,
  isName = false,
}) => {
  return (
    <span
      className={`
      ${!isName ? "ml-2" : ""}
      ${isName ? "user-name" : ""} 
      ${notification.tag ? "tag" : ""} 
      `}
    >
      {notification.text}
    </span>
  );
};

const Avatar: React.FC<{ avatar: string; name: string }> = ({
  avatar,
  name,
}) => {
  return (
    <img
      alt={`Avatar-${name}`}
      src={avatar}
      className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"
    />
  );
};

const Image: React.FC<{ img: string; alt: string }> = ({ img, alt }) => {
  return (
    <img
      src={img}
      alt={alt}
      className="w-10 h-10 rounded-sm bg-gray-300 flex-shrink-0 cursor-pointer"
    />
  );
};

const NotificationItem: React.FC<Props> = ({
  name,
  avatar,
  notifications,
  time,
  unread = false,
  dm = "",
  image = "",
}) => {
  return (
    <div
      className={`${unread ? "unread" : "bg-transparent"} notification-item`}
    >
      <Avatar avatar={avatar} name={name} />
      <div className="flex-grow">
        <p className="text-gray-400 w-full">
          <TextItem notification={{ text: name }} isName />
          {notifications.map((notification, index) => (
            <TextItem
              notification={notification}
              key={`notification-${index}`}
            />
          ))}
          {unread ? <span className="unread-badge"></span> : null}
        </p>
        <p>{time}</p>
        {dm ? <p className="dm">{dm}</p> : null}
      </div>
      {image ? <Image img={image} alt={`Notification-image-${name}`} /> : null}
    </div>
  );
};

export default NotificationItem;
