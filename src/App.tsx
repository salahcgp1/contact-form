import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor="Name">Name </Label>
                <Input id="Name" name="Name" />
                <Label htmlFor="Email">Email </Label>
                <Input id="Email" name="Email" />
                <Label htmlFor="Message">Message</Label>
                <Input id="Message" name="Message" />
                <SubmitButton>Submit </SubmitButton>
            </form>
        </div>
    );
}

export default App;
