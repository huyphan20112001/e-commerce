import "./Reason.scss";
import React from "react";
import Image from "../../../components/Image/Image";
import Button from "../../../components/Button/Button.js";
import images from "../../../asssets/image";

function Reason({ mode }) {
  return (
    <div className={`container-fluid ${mode}`}>
      <div id="reason" className="reason">
        <div className="container">
          <div className="reason-wrapper">
            <div className="reason-video">
              <Image src={images.reason} alt="reason" />
            </div>
            <div className="reason-content">
              <h4 className="reason-heading">Why Choose Us?</h4>
              <div className="reason-detail">
                <p>
                  Neque quisque sollicitudin tempor vestibulum elit taciti.
                  Sagittis tempor consequat turpis. Aenean curae elementum
                  vestibulum dapibus vitae laoreet. Bibendum suspendisse
                  himenaeos malesuada. Nisl taciti si platea dui. Euismod
                  malesuada facilisis duis lobortis aliquet massa. Tincidunt
                  vivamus ac consectetuer molestie pharetra. Sodales pulvinar
                  non habitant.
                </p>
                <p>
                  Nisl taciti si platea dui. Euismod malesuada facilisis duis
                  lobortis aliquet massa. Tincidunt vivamus ac consectetuer
                  molestie pharetra. Sodales pulvinar non habitant.
                </p>
                <p>
                  SUSTAINABLY SOURCED EASY TO RECYCLE IMPROVED HOME RESALE VALUE
                  A SMART WAY TO LEED CERTIFICATION
                </p>
              </div>
              <Button
                href="https://www.youtube.com/watch?v=gQlMMD8auMs"
                primary
                learn
                learnBlackFull
              >
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason;
