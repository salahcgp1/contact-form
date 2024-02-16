import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';
import { FormLine } from './components/form-line/form-line';

function App() {

    function handOnSubmit (e: React.SyntheticEvent<HTMLFormElement>) {
      e.preventDefault();

      const formData: Record<string, string> = {};

        function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
            return 'value' in e && 'name' in e;
        }

        Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        
      console.log('formData', formData);

    // you can activate his code only when
    //   fetch('/.netlify/functions/mail', {
    //     method: 'POST',
    //     body: JSON.stringify(formData)
    // }).then(response => {
    //     // Do something here on success!
    // }).catch(error => {
    //     // Do something here on error!
    // });

    }

    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form onSubmit={handOnSubmit}>
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
