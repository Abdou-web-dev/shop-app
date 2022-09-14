import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import myVideo from "../../assets/videos/video_clothes.mp4";
import "./modalsStyles.scss";

export function WomenWearModal({ handleCloseModal }) {
  return (
    <div className="women-wear-modal-container">
      <div className="women-wear-modal-inner">
        <div className="women-wear-modal-close-icon">
          <IconButton onClick={handleCloseModal}>
            <CloseIcon fontSize="large"></CloseIcon>
          </IconButton>
        </div>

        <div className="women-wear-modal-video">
          <video
            height={"500px"}
            width={"800px"}
            autoPlay={true}
            loop
            controls
            src={myVideo}
          ></video>
        </div>

        <div className="women-wear-modal-text">
          <span>
            <span className="welcome">
              <span className="w">W</span>elcome
            </span>
            ladies, in this page, you can see our selection of some really nice{" "}
            <span className="clothes">clothes</span> , feel free to order the
            ones you like !
          </span>
        </div>
      </div>
    </div>
  );
}
