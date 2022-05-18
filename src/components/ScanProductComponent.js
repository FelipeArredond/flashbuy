import { Modal, Button, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
import { useState } from "react";

export function ScanProduct(){
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Launch static backdrop modal
            </Button>
      
            <Modal
              show={true}
              onHide={handleClose}
              keyboard={false}
            >
              <ModalHeader closeButton>
                <h3>Hello</h3>
              </ModalHeader>
              <ModalBody>
                I will not close if you click outside me. Don't even try to press
                escape key.
              </ModalBody>
              <ModalFooter>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </ModalFooter>
            </Modal>
          </>
        );
}