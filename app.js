const express = require('express');
const app = express();
const port = 8080;

// Watson AssistantのEmbedコード
const watsonAssistantScript = `
  <script>
    window.watsonAssistantChatOptions = {
      integrationID: "5b5cbd62-badc-4082-b10a-136ddfc5efac",
      region: "us-south",
      serviceInstanceID: "8877b1e8-7971-4ca2-9ae2-ba092a5d9bfb",
      onLoad: async (instance) => { await instance.render(); }
    };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  </script>
`;

// ルートパスのエンドポイント
app.get('/', (req, res) => {
  res.send(watsonAssistantScript);
});

// Expressアプリケーションを起動
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

