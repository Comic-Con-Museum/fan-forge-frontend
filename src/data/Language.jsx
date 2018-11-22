import React, { PureComponent } from 'react';

const Language = React.createContext({
    language: "",
    setLanguage: () => {}
});

const LanguageConsumer = Language.Consumer;

class LanguageProvider extends PureComponent {
    state = { language: "en" };

    setLanguage = languageToSet => this.setState({ language: languageToSet });

    render() {
      return (
        <Language.Provider value={{
          language: this.state.language,
          setLanguage: this.setLanguage
        }}>
          {this.props.children}
        </Language.Provider>
    );}
};

export {
    Language,
    LanguageConsumer,
    LanguageProvider
};