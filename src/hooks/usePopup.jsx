import { useState, useEffect } from "react";
import "./usePopup.css";

const usePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const [size, setSize] = useState(null);
  const [recallApi, setRecallApi] = useState(null);
  const [hasRecallApi, setHasRecallApi] = useState(false);
  const [hiddenClose, setHiddenClose] = useState(false);

  const showPopup = (content, size, recall, hiddenCloseProp) => {
    setPopupContent(content);
    setIsVisible(true);
    if (size) setSize(size);
    if (recall) {
      setRecallApi(() => recall);
      setHasRecallApi(false);
    }
    setHiddenClose(hiddenCloseProp);
  };
  useEffect(() => {
    if (hasRecallApi && recallApi) {
      recallApi();
    }
  }, [hasRecallApi, recallApi]);

  const hidePopup = () => {
    setIsVisible(false);
    setPopupContent(null);
    setHasRecallApi(true);
  };

  const fixScroll = isVisible ? " no-scroll" : "";

  const Popup = () =>
    isVisible && <div className="popup-container">{popupContent}</div>;

  return { showPopup, Popup, hidePopup, fixScroll };
};

export default usePopup;
