"use client";

import React, { useEffect } from "react";
import AnimatedButton from "../AnimatedButton";
import { useRouter } from "next/navigation";
import HamburgerButton from "./HamburgerButton";
import { useModal } from "@/context/ModalContext";
import Cookies from "js-cookie";
import { useAppSelector } from "@/redux/hooks";
import { setToken, userCurrentToken } from "@/redux/feature/user/userSlice";
import { useDispatch } from "react-redux";

const NavbarMenu = () => {
  const { openModal } = useModal();
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useAppSelector(userCurrentToken);

  useEffect(() => {
    dispatch(setToken(Cookies.get("token")));
  }, [dispatch]);

  const handleLogOut = () => {
    Cookies.remove("token");
    dispatch(setToken(null));
  };

  return (
    <div className="flex items-center gap-6">
      {token ? (
        <>
          <AnimatedButton
            text="Dashboard"
            className="bg-transparent"
            onClick={() => router.push("/add-project")}
          />
          <AnimatedButton
            text="Logout"
            className="bg-transparent"
            onClick={handleLogOut}
          />
        </>
      ) : (
        <AnimatedButton
          text="Login"
          className="bg-transparent"
          onClick={() => openModal("login")}
        />
      )}
      <HamburgerButton onClick={() => openModal("navigation")} />
    </div>
  );
};

export default NavbarMenu;
