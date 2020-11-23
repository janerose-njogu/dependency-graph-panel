import React from 'react';
import Autosuggest from 'react-autosuggest';
import { StandardEditorProps } from '@grafana/data';

import { PanelSettings } from '../types';

interface Props extends StandardEditorProps<string, PanelSettings> {}

export class TypeaheadTextField extends React.PureComponent<Props> {

    renderSuggestion(suggestion:any){
        return(
        <div>
          {suggestion}
        </div>)
    }

    getColumns() {
        return["a", "b", "c"]
    }

    onChange() {
        console.log("change")
    }

    getSuggestions(value: any){
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : this.getColumns().filter((column =>
            column.toLowerCase().slice(0, inputLength) === inputValue
        ));
      };


    onSuggestionsFetchRequested(value: any){
        this.setState({
        suggestions: this.getSuggestions(value)
        });
    };

    getSuggestionValue(suggestion: any){
        return suggestion
    }

    onSuggestionsClearRequested = () => {
        this.setState({
        suggestions: []
        });
    };

    render() {
        const value = "a"
        const suggestions = this.getSuggestions(value)

        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}
/*
import React from 'react';
import { StandardEditorProps } from '@grafana/data';
import { PanelSettings } from '../types';
import Autosuggest from 'react-autosuggest';

interface Props extends StandardEditorProps<string, PanelSettings> {}

export const TypeaheadTextfield: React.FC<Props> = ({ item, value, onChange, context }) => {
    const test = ["a","b","c"]
    return (
        <div className="gf-form">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
      />
        </div>
    )
}

function handle(a: any, onChange: any, value: any, context:any, item: any) {
    console.log(context)
    console.log(item)
    console.log(value)
    console.log(a)
    onChange.call(a)
} 

const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : languages.filter((lang: { name: string; }) =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );*/