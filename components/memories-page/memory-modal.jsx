import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";

export default function StoryModal({memory ,isOpen, onClose, onOpenChange}) {


  return (
    <>
     <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} className="max-h-90vh max-w-70vw overflow-auto rounded-3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl">{memory.headline}</ModalHeader>
              <ModalHeader>מאת {memory.name}</ModalHeader>
              <ModalBody>
                <p className="text-medium font-medium"> 
                  {memory.text}
                </p>
                <div className="imgs-container flex flex-col justify-between items-center gap-2">
                {memory.files.map((image) => {
                  return <Image
                    alt="story-img"
                    key={image.id}
                    src={image.url}
                    className="min-w-15vw min-h-15vw"
                  />
                })}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  סגור
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
