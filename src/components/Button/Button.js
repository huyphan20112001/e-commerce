import "./Button.scss";
import React from "react";

function Button({
  to,
  href,
  primary,
  children,
  onClick,
  learn,
  view,
  learnBlackBorder,
  project,
  read,
  viewAll,
  learnBlackFull,
  video,
  ...passProps
}) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
  } else if (href) {
    props.href = href;
    Component = "a";
  } else if (video) {
    Component = "div";
  }

  let classes = [
    primary ? "btn-primary" : "",
    learn ? "btn-learn" : "",
    view ? "btn-view" : "",
    learnBlackBorder ? "btn-view-black" : "",
    learnBlackFull ? "btn-view-black-full" : "",
    project ? "btn-project" : "",
    read ? "btn-read" : "",
    viewAll ? "btn-view-all" : "",
    video ? "video" : "",
  ];
  // if (learn) {
  //   props.learn = learn;
  //   classes.push("btn-learn");
  // }
  // if

  return (
    <Component className={classes.join(" ")} {...props}>
      {children}
    </Component>
  );
}

export default Button;
