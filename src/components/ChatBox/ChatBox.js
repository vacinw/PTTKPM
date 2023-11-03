import classNames from "classnames/bind";
import styles from "./ChatBox.module.scss";

const cx = classNames.bind(styles);

function ChatBox() {
  return (
    <div className={cx("wrapper")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
        onClick={() => {
          const chatboxElement = document.querySelector(
            ".ChatBox_chatbox__suQVO"
          );
          chatboxElement.style.display = "flex";
        }}
      >
        <radialGradient
          id="8O3wK6b5ASW2Wn6hRCB5xa"
          cx="11.087"
          cy="7.022"
          r="47.612"
          gradientTransform="matrix(1 0 0 -1 0 50)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#1292ff" />
          <stop offset=".079" stopColor="#2982ff" />
          <stop offset=".23" stopColor="#4e69ff" />
          <stop offset=".351" stopColor="#6559ff" />
          <stop offset=".428" stopColor="#6d53ff" />
          <stop offset=".754" stopColor="#df47aa" />
          <stop offset=".946" stopColor="#ff6257" />
        </radialGradient>
        <path
          fill="url(#8O3wK6b5ASW2Wn6hRCB5xa)"
          d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
        />
        <path
          d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
          opacity=".05"
        />
        <path
          d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
          opacity=".07"
        />
        <path
          fill="#fff"
          d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
        />
      </svg>

      <div className={cx("chatbox")}>
        <div className={cx("header")}>
          <div>
            <img
              alt="EaseCook"
              width="20"
              height="20"
              src="https://cdn.freelogodesign.org/files/68e0a74eb86a45099377c29064d7a171/thumb/logo_200x200.png?v=0"
            />
            <span>EaseCook</span>
          </div>
          <img
            className={cx("hide")}
            srcSet="https://img.icons8.com/?size=2x&amp;id=2760&amp;format=png 2x, https://img.icons8.com/?size=1x&amp;id=2760&amp;format=png 1x"
            src="https://img.icons8.com/?size=2x&amp;id=2760&amp;format=png 2x"
            alt="ios7"
            loading="lazy"
            width="16"
            height="16"
            lazy="loaded"
            onClick={() => {
              const chatboxElement = document.querySelector(
                ".ChatBox_chatbox__suQVO"
              );
              chatboxElement.style.display = "none";
            }}
          />
        </div>
        <div className={cx("box")}>
          <p className={cx("me")}>EaseCook xin chào !</p>
          <p className={cx("me")}>Bạn là người ăn chay hay ăn thường ?</p>
          <p className={cx("you")}>Tôi là người ăn chay</p>
          <p className={cx("me")}>Bạn có kiêng ngọt không ?</p>
          <p className={cx("you")}>Tôi không</p>
          <p className={cx("me")}>Bạn có kiêng mặn không ?</p>
          <p className={cx("you")}>Tôi có</p>
          <p className={cx("me")}>Oke</p>
        </div>
        <div className={cx("input")}>
          <img
            className={cx("hide")}
            srcSet="https://img.icons8.com/?size=2x&amp;id=2760&amp;format=png 2x, https://img.icons8.com/?size=1x&amp;id=2760&amp;format=png 1x"
            src="https://img.icons8.com/?size=2x&amp;id=2760&amp;format=png 2x"
            alt="ios7"
            loading="lazy"
            width="12"
            height="12"
            lazy="loaded"
          />

          <input type="text" placeholder="Aa" />
          <img
            width="24"
            height="24"
            loading="lazy"
            fetchpriority="low"
            alt="1058745494"
            src="https://www.shutterstock.com/image-vector/paper-plane-icon-vector-send-260nw-1058745494.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
