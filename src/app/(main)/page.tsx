'use client';
import FormCard from 'components/FormCard';
import Select from 'components/Select';
import TextSelectField from 'components/TextSelectField';
import DeleteIcon from 'icons/DeleteIcon';
import MenuIcon from 'icons/MenuIcon';
import { tableOfContentHeadingOptions } from 'utils/tableOfContent';

const Home = () => {
    return (
        <div className="flex w-full items-center gap-3 md:gap-6">
            <FormCard title="Table of contents">
                <div className="flex w-full items-center gap-3">
                    <div>
                        <MenuIcon />
                    </div>
                    <div className="w-full flex-1">
                        <TextSelectField fullWidth label="Title">
                            {Object.keys(tableOfContentHeadingOptions).map(
                                (content, value) => (
                                    <option key={value} value={value}>
                                        {content}
                                    </option>
                                )
                            )}
                        </TextSelectField>
                    </div>
                    <div>
                        <Select label="se" fullWidth>
                            <option value="bd">Bangladesh</option>
                            <option value="in">India</option>
                            <option value="us">United States</option>
                        </Select>
                    </div>
                    <div>
                        <DeleteIcon className="text-red" />
                    </div>
                </div>
            </FormCard>
            <div className="w-full">
                <TextSelectField fullWidth label="Hi">
                    <option value="bd">Bangladesh</option>
                    <option value="in">India</option>
                    <option value="us">United States</option>
                </TextSelectField>
            </div>
        </div>
    );
};

export default Home;
