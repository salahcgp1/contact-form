import { createBoard } from '@wixc3/react-board';
import { FormLine } from '../../../components/form-line/form-line';

export default createBoard({
    name: 'FormLine',
    Board: () => <FormLine />,
    isSnippet: true,
});