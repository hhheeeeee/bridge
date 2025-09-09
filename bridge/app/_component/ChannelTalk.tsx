"use client";

import * as ChannelService from "@channel.io/channel-web-sdk-loader";
import { useEffect } from "react";

function ChannelTalk() {
  useEffect(() => {
    ChannelService.loadScript();
    console.log("ChannelService.loadScript", ChannelService);
    ChannelService.boot({
      /** try to test your channel */
      customLauncherSelector: "#chat",
      hideChannelButtonOnBoot: true, // 채널톡 버튼 숨기기
      // pluginKey: "833ec521-4443-4e92-b7c4-664c0399c871",
      pluginKey: process.env.NEXT_PUBLIC_PLUGIN_KEY ?? "",
    });
    console.log("ChannelService.boot");
    ChannelService.showMessenger();
    ChannelService.hideChannelButton();
    console.log("ChannelService.showMessenger");
  }, []);

  return (
    <div className="App">
      <div>
        <a
          href="https://developers.channel.io/docs/web-quickstart#install-using-an-npm-module-option-2"
          rel="noreferrer"
          target="_blank"
        ></a>
      </div>
      <h1>Channel Web SDK Playground</h1>
      <section>
        <h2>shutdown</h2>
        <button onClick={() => ChannelService.shutdown()}>shutdown</button>
      </section>
      <section>
        <h2>showMessenger</h2>
        <button onClick={() => ChannelService.showMessenger()}>
          showMessenger
        </button>
      </section>
      <section>
        <h2>hideMessenger</h2>
        <button onClick={() => ChannelService.hideMessenger()}>
          hideMessenger
        </button>
      </section>
      <section>
        <h2>openChat</h2>
        <button onClick={() => ChannelService.openChat()}>open new chat</button>
        <button
          onClick={() => ChannelService.openChat(undefined, "new-message")}
        >
          open new chat with message
        </button>
      </section>
      <section>
        <h2>updateUser</h2>
        <button onClick={() => ChannelService.updateUser({ language: "ko" })}>
          use Korean language
        </button>
        <button onClick={() => ChannelService.updateUser({ language: "en" })}>
          use English language
        </button>
      </section>
      <section>
        <h2>customLauncher</h2>
        <button id="custom-launcher">Custom Launcher Button</button>
      </section>
      <section>
        <h2>setAppearance</h2>
        <button onClick={() => ChannelService.setAppearance("light")}>
          light mode
        </button>
        <button onClick={() => ChannelService.setAppearance("dark")}>
          dark mode
        </button>
      </section>
      <section>
        <h2>showChannelButton</h2>
        <button onClick={() => ChannelService.showChannelButton()}>
          showChannelButton
        </button>
      </section>
      <section>
        <h2>hideChannelButton</h2>
        <button onClick={() => ChannelService.hideChannelButton()}>
          hideChannelButton
        </button>
      </section>
      <footer className="read-the-docs">
        Click on the Channel Talk logo to learn more
      </footer>
    </div>
  );
}

export default ChannelTalk;
