import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import TextField from '@material-ui/core/TextField';

export default (props) => (
<Modal
    isOpen={props.modalShow}
    toggle={props.toggle}
    className='exhibit-modal'
    centered
    size='lg'
>
    <ModalHeader toggle={props.toggle}>Comic-Con Museum Login</ModalHeader>
    <ModalBody>
        <TextField
            id='password-input'
            label='Username'
            margin='normal'
            autoFocus
            onChange={event => console.log(event.target.value)}
        />
    </ModalBody>
    <ModalFooter>
        <Button color='primary' onClick={props.toggle}>Login</Button>{' '}
        <Button color='secondary' onClick={props.toggle}>Cancel</Button>
    </ModalFooter>
</Modal>
)