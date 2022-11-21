import "./Upload.scss";

import thumbnail from "../../assets/images/Upload-video-preview.jpg";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SERVER = "http://localhost";
const SERVER_PORT = "8080";
const SERVER_ENDPOINT = "videos";

const Upload = () => {
  document.title = "Upload | BrainFlix";

  const [videoPublished, setVideoPublished] = useState(false);
  const [formNotValid, setFormNotValid] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const navigate = useNavigate();

  const isFormValid = () => {
    return videoTitle.trim() !== "" && videoDescription.trim() !== "";
  };

  const resetUploadForm = () => {
    setVideoTitle("");
    setVideoDescription("");
  };

  const handleChangeTitle = (event) => {
    setVideoTitle(event.target.value);
    setFormNotValid(false);
  };

  const handleChangeDescription = (event) => {
    setVideoDescription(event.target.value);
    setFormNotValid(false);
  };

  const handleVidPublish = (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setFormNotValid(true);
      return false;
    }

    axios.post(`${SERVER}:${SERVER_PORT}/${SERVER_ENDPOINT}`, {
      title: videoTitle,
      description: videoDescription,
    });

    resetUploadForm(event);

    setVideoPublished(true);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  const handleCancel = () => {
    resetUploadForm();
  };

  return (
    <main className="master">
      <div className="master__container">
        <div className="upload">
          <h1 className="upload__title">Upload Video</h1>
        </div>
        <form className="upload__form" onSubmit={handleVidPublish}>
          <div className="upload__thumbnail">
            <span className="upload__label">Video Thumbnail</span>
            <img
              className="upload__image"
              src={thumbnail}
              alt="Person riding a bike with blue handles and frame"
            />
          </div>
          <div className="upload__content">
            <div className="upload__video-title">
              <label className="upload__label" htmlFor="upload-title">
                Title your video
              </label>
              <input
                type="text"
                className="upload__input"
                name="upload-title"
                id="upload-title"
                placeholder="Add a title to your video"
                value={videoTitle}
                onChange={handleChangeTitle}
              />
            </div>
            <div className="upload__description">
              <label className="upload__label" htmlFor="upload-body">
                Add a video description
              </label>
              <textarea
                className="upload__body"
                name="upload-body"
                id="upload-body"
                placeholder="Add a description to your video"
                value={videoDescription}
                onChange={handleChangeDescription}
              ></textarea>
            </div>
          </div>
          <div className="upload__actions">
            <button className="upload__publish" type="submit">
              Publish
            </button>
            <button
              className="upload__cancel"
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </button>
            {videoPublished && (
              <div className="upload__success">
                <span className="upload__message">
                  The video uploaded sucessfully
                </span>
                <span className="upload__alert">Taking you back home in</span>
                <span className="upload__counter"></span>
              </div>
            )}
            {formNotValid && (
              <div className="upload__error">
                <span className="upload__message">
                  ** Video cannot be published without title and description
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Upload;
