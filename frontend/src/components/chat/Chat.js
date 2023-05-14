import React, { Component } from 'react'

export class Chat extends Component {
    componentDidMount(){
      
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"27f053b50d296725015a2fb4de4b62bf2","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Chat