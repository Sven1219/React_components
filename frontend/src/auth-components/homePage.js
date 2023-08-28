import React, {useState} from 'react';
import LeftPanelButtonGroup from '../left-panel-components';
import XCSSDisplay from '../xCSS-components';
import XLanguageDisplay from '../xLanguage-components';
import UserDisplay from '../userPanel-components';

export default function HomePage() {
    const [UIstate, setUIstate] = useState(0);

      const GUIDispalyfun = () => {
        if(UIstate === 0){
            return <XCSSDisplay />;
        } else if(UIstate === 1){
            return <XLanguageDisplay />;
        } else if(UIstate === 2){
            return <UserDisplay />
        }
      }
        return (
          <div className="App">
            <div className="control-panel-left">
              <LeftPanelButtonGroup callback={(val)=>setUIstate(val)} />
            </div>
            {GUIDispalyfun()}
          </div >)
}