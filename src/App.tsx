import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';
import { FormLine } from './components/form-line/form-line';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form>
                <FormLine>
                    <Label htmlFor="Name">Name </Label>
                    <Input id="Name" name="Name" />
                </FormLine>
                <FormLine>
                    <Label htmlFor="Email">Email </Label>
                    <Input id="Email" name="Email" />
                </FormLine>

                <FormLine>
                    <Label htmlFor="Message">Message</Label>
                    <Input id="Message" name="Message" />
                </FormLine>
                <SubmitButton> SUBMIT </SubmitButton>
            </form>
        </div>
    );
}

export default App;
