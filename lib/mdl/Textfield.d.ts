import { Component } from 'react';
import { TextInputProps } from 'react-native';
export default class Textfield extends Component<TextInputProps> {
    constructor(props: any);
    bufferedValue: any;
    focus(): void;
    isFocused(): any;
    blur(): void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    _onTextChange: (text: any) => void;
    _onFocus: (e: any) => void;
    _onBlur: (e: any) => void;
    startAnimations(animations: any, cb: any): void;
    _doMeasurement: () => void;
    _onLabelMeasured(left: any, top: any, width: any, height: any): void;
    _onInputMeasured(left: any, top: any, width: any, height: any): void;
    _aniFloatLabel(): void;
    _aniStartHighlight(focused: any): void;
    _aniStopHighlight(): void;
    setPlaceholder(placeholder: any): void;
    _callback(name: any, e: any): void;
    render(): JSX.Element;
}
//# sourceMappingURL=Textfield.d.ts.map