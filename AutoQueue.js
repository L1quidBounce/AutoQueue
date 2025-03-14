const script = registerScript({
  name: "AutoQueue",
  version: "1.0.0",
  authors: ["L1quidBounce"]
});

script.registerModule({
  name: "AutoQueue",
  category: "Misc", // Movement, Combat, Render, ...
  description: "Automaticly Requeue Games When The Game End."
}, (mod) => { 
    mod.on("enable", () =＞ {
        Client.displayChatMessage("[L1quidBounce] 正在量产狼人卡.")
    }
  });
});
