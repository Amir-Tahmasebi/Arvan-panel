export interface Props {
    label: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}