import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

export default function ChangeContributorStatus() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });

    const onSubmit = data => console.log(data);

    return (
        <div>
            <button className="md:flex items-center relative cursor-pointer whitespace-nowrap hidden" onClick={handleClickOpen}>
                Become a Contributor
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Upgrade Your Account Status</DialogTitle>
                <h4 className='px-5'>Please tick the  below checkbox of become a contributor to upgrade your account as contibutor and share your awesome recipes with everyone.</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="ml-5">
                    <Controller
                        name="checkbox"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Checkbox {...field} />}
                    />
                    <input type="submit" value="Become Contributor" />
                    
                </form>
            </Dialog>
        </div>
    );
}
