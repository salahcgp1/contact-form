import classNames from 'classnames';
import styles from './form-line.module.scss';

export interface FormLineProps {
    className?: string;
    children?: Array<JSX.Element> | JSX.Element | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FormLine = ({ className, children }: FormLineProps) => {
    return <div className={classNames(styles.root, className)}>{ children }</div>;
};
