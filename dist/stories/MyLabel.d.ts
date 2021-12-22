/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * Capitalize the label
     */
    allCaps?: boolean;
    /**
     * Background color of the label
     */
    backgroundColor?: string;
    /**
     * Color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * This is the label that will be displayed
     */
    label: string;
    /**
     * Custom color of the font
     */
    fontColor?: string;
    /**
     * This is size of tag
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size }: MyLabelProps) => JSX.Element;
