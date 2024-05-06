import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';


export default function AddStoryForm ({ isOpen, onOpenChange }) {


    return (
        <Modal
      backdrop='opaque'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      className='min-w-75vw h-75vh'
    >
   <ModalContent>
            {(onClose) => (
              <>
              <ModalBody>
                  <div className='h-full w-full'>
                      <iframe
                      // dir='rtl'
                      // onLoad={}
                      className="airtable-embed"
                      src="https://airtable.com/embed/appJ2qsAVwaRQvqWW/pagGcSMDLIMkzoX5S/form"
                      onWheel={() => {}}
                      height='100%'
                      width='100%'
                      style={{ background: "transparent"}}
                  />
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
    </Modal>
    )
}