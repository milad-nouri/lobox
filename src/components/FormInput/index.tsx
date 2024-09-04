import ArrowIcon from "../../assets/icons/ArrowIcon";

export interface FormInputProps {
    onInputFocus: () => void;
    open: boolean;
    inputName: string;
}

export default function FormInput(props: FormInputProps) {
    const { onInputFocus, open, inputName } = props;

    return (
        <div className="input-wrapper">
            <input autoComplete="off" name={inputName} onFocus={onInputFocus} />
            <div className={`hide-icon ${open ? "show-icon" : ""}`}>
                <ArrowIcon />
            </div>
        </div>
    );
}
