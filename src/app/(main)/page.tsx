'use client';
import Select from 'components/Select';
import TextField from 'components/TextField';
import TextSelectField from 'components/TextSelectField';

const Home = () => {
    return (
        <div>
            <h1 className="text-5xl">This is the main page</h1>
            <TextField fullWidth label="Hi" />
            <TextSelectField fullWidth label="Hi">
                <option value="bd">Bangladesh</option>
                <option value="in">India</option>
                <option value="us">United States</option>
            </TextSelectField>
            <Select label="Country" value={'bd'} onChange={() => {}} fullWidth>
                <option value="bd">Bangladesh</option>
                <option value="in">India</option>
                <option value="us">United States</option>
            </Select>
        </div>
    );
};

export default Home;
