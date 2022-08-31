import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const walletContext = createContext({});

export const useWallet = () => useContext(walletContext);

const useWalletProvider = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
      if (!account) connectHandler();
    }
  }, []);

  const accountsChanged = async (newAccount) => {
    setAccount(newAccount);
    try {
      setLoading(true);
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount?.toString(), "latest"],
      });
      setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.log(err);
      toast.error("There was a problem connecting to MetaMask");
      setErrorMessage("There was a problem connecting to MetaMask");
    } finally {
      setLoading(false);
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };

  const connectHandler = async () => {
    if (window.ethereum) {
      setLoading(true);
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        toast.error("There was a problem connecting to MetaMask");
        setErrorMessage("There was a problem connecting to MetaMask");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Install MetaMask");
      setErrorMessage("Install MetaMask");
    }
  };

  const disconnectHandler = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [{ eth_accounts: {} }],
    });
    chainChanged();
  };

  return {
    account,
    balance,
    loading,
    connectHandler,
    disconnectHandler,
    errorMessage,
  };
};

export const WalletContextProvider = ({ children }) => {
  const wallet = useWalletProvider();

  return (
    <walletContext.Provider value={wallet}>{children}</walletContext.Provider>
  );
};
