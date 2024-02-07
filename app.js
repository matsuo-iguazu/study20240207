const express = require('express');
const app = express();
const port = 8080;

// Watson AssistantのEmbedコード
const watsonAssistantScript = `
  <script>
    window.watsonAssistantChatOptions = {
      integrationID: "5b5cbd62-badc-4082-b10a-136ddfc5efac",
      region: "us-south",
      serviceInstanceID: "38b61b33-64db-4bb2-8f74-87cc16145ee6",
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

