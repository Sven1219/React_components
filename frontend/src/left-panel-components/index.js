import React from 'react';
import { Button, ButtonGroup} from "@blueprintjs/core";

export default function LeftPanelButtonGroup({callback}) {
    return(
        <>
            <ButtonGroup fill style={{ marginTop: 10, height: "40px" }}>
                <Button intent="success" icon="modal" onClick={()=>callback(0)} >xCSS GUI</Button>
            </ButtonGroup>
            <ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
                <Button intent="success" icon="modal" onClick={()=>callback(1)} >xLanguage GUI</Button>
            </ButtonGroup>
            <ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
                <Button intent="success" icon="modal" onClick={()=>callback(2)} >User GUI</Button>
            </ButtonGroup>
            {/* <Link to="/XCSSDisplay"><ButtonGroup fill style={{ marginTop: 10, height: "40px" }}>
                <Button intent="success" icon="modal" >xCSS GUI</Button>
            </ButtonGroup></Link>
            <Link to="/XLanguageDisplay"><ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
                <Button intent="success" icon="modal" >xLanguage GUI</Button>
            </ButtonGroup></Link>
            <Link to="/UserDisplay"><ButtonGroup fill style={{ marginTop: 20, height: "40px" }}>
                <Button intent="success" icon="modal" >User GUI</Button>
            </ButtonGroup></Link> */}
        </>
    )
}
