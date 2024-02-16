import classNames from 'classnames';
import styles from './form-row.module.scss';
import { Label } from '../label/label';
import { Input } from '../input/input';

export interface FormRowProps {
    className?: string;
    id?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FormRow = ({ className, id }: FormRowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Label htmlFor={id} children={children}/>
            <Input id={id} name={id}/>
        </div>
    );
};
