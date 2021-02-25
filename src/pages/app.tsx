import React, { useContext } from "react";
import { IdentityContext } from "../../identity-context";
import { AppLogedIn } from "../components/AppLogedIn";
import { AppLogedOut } from "../components/AppLogedOut";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function app() {
  const { user } = useContext(IdentityContext);
  if (!user) {
    return (
      <div>
        <Header />
        <AppLogedOut />
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <AppLogedIn />
      <Footer />
    </div>
  );
}
