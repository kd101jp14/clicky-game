import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title"
class App extends React.Component {
    state = {
        score : 0,
        topScore : 0
    }
    render() {
        return (
            <Wrapper>
                <Navbar>
                   Score: {this.state.score} | Top Score: {this.state.topScore}
                </Navbar>
                <Title>Clicky Game</Title>
            </Wrapper>

        );
    }
}

export default App;
