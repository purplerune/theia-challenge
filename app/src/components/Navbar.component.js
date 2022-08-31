import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";
import { useWallet } from "../context/Wallet.context";
import { shortenWalletAddress } from "../utils/strings.utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { account, balance, connectHandler, disconnectHandler } = useWallet();

  const displayBalance = `${balance} ${balance ? "ETH" : null}`;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img
              src="https://www.theia.finance/static/media/logo.70226144649d1a7c571327223765b4d1.svg"
              alt="Logo"
            />
          </a>
          <span
            className="navbar-burger"
            data-target="navbarMenuHeroA"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroA"
          className={classNames({ "navbar-menu": true, "is-active": isOpen })}
        >
          <div className="navbar-end">
            {balance && (
              <span className="navbar-item">Balance: {displayBalance}</span>
            )}
            <span className="navbar-item">
              {!account ? (
                <button className="button is-primary" onClick={connectHandler}>
                  Connect
                </button>
              ) : (
                <button
                  className="button is-info"
                  onClick={() => {
                    navigator.clipboard.writeText(account);
                    toast.success("Copied to clipboard");
                  }}
                >
                  {shortenWalletAddress(account)}
                </button>
              )}
            </span>
            {!!account && (
              <span className="navbar-item">
                <button
                  className="button is-danger"
                  onClick={disconnectHandler}
                >
                  Disconnect
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
