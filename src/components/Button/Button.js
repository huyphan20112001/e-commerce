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
  }

  let classes = [
    "btn-primary",
    learn ? "btn-learn" : "",
    view ? "btn-view" : "",
    learnBlackBorder ? "btn-view-black" : null,
    learnBlackFull ? "btn-view-black-full" : null,
    project ? "btn-project" : null,
    read ? "btn-read" : null,
    viewAll ? "btn-view-all" : null,
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
